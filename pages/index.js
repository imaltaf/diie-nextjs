import { useState } from 'react';
import '../styles/globals.css';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [rows, setRows] = useState([]);
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInput = (event) => {
    const lines = event.target.value.trim().split('\n');
    const newRows = lines.map(line => {
      const columns = line.trim().split(/\s{2,}/);
      if (columns.length >= 5) {
        const [repository, tag, imageId, created, size] = columns;
        if (/^[a-f0-9]{12}$/.test(imageId)) {
          return { repository, tag, imageId, created, size, checked: false };
        }
      }
      return null;
    }).filter(Boolean);

    setRows(newRows);
    setInputText(event.target.value);
  };

  const handleConvert = () => {
    const imageIds = rows.filter(row => row.checked).map(row => row.imageId).join(' ');
    setOutputText(`sudo docker rmi -f ${imageIds}`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => {
        setInputText('');
        setRows([]);
        setOutputText('');
      }, 10000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  const toggleCheck = (index) => {
    const newRows = [...rows];
    newRows[index].checked = !newRows[index].checked;
    setRows(newRows);
  };

  return (
    <div className="app">
      <div className="glassmorph">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-100 from-sky-400">Docker Image ID Extractor</span>.</h1>

        
        <textarea
          value={inputText}
          onChange={handleInput}
          placeholder="Paste your input here..."
        />
        {rows.length > 0 && (
          <div id="outputContainer">
            <form id="outputForm">
              <table>
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Repository</th>
                    <th>Tag</th>
                    <th>Image ID</th>
                    <th>Created</th>
                    <th>Size</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          className="w-8 h-8 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 neon-checkbox"
                          checked={row.checked}
                          onChange={() => toggleCheck(index)}
                        />
                      </td>
                      <td>{row.repository}</td>
                      <td>{row.tag}</td>
                      <td>{row.imageId}</td>
                      <td>{row.created}</td>
                      <td>{row.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
            <div className="button relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <button onClick={handleConvert}>Convert</button>
              <span></span>
            </div>
            <div className="button relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <button onClick={handleCopy}>
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
              <span></span>
            </div>
            {outputText && <p>{outputText}</p>}
          </div>
        )}
      </div>
      <footer class="bg-gray rounded-lg shadow m-4 dark:bg-gray-800 fixed-bottom ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://opensecai.com/" class="hover:underline">opensecAi™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://github.com/imaltaf/diie-nextjs/blob/main/README.md" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="https://opensecai.com/#contact" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
      <style jsx>{`
        .app {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        textarea {
          width: 100%;
          height: 100px;
          margin-bottom: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
          
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        th {
          background-color: #f2f2f2;
        }
        .button {
          margin-bottom: 20px;
        }
        button {
          padding: 10px 20px;
          cursor: pointer;
        }
        p {
          font-weight: bold;
        }
      `}</style>
    </div>
    
  );
}
