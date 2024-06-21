import '../styles/globals.css';

export default function About() {
  return (
    <div className="app">
      <div className="glassmorph">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-100 from-sky-400">
            About This Tool
          </span>
        </h1>
        <section className="content">
          <h2>Image ID Extractor</h2>
          <p>
            The <strong>Image ID Extractor</strong> is a handy tool designed to help you manage Docker images efficiently. By pasting your Docker image data into the input field, you can easily extract and manipulate image IDs with a user-friendly interface. This tool is particularly useful for developers and system administrators who need to handle Docker images frequently.
          </p>

          <h2>Features</h2>
          <ul>
            <li><strong>Easy Extraction</strong>: Simply paste your Docker image data into the text area, and the tool will automatically parse and display the relevant information.</li>
            <li><strong>Select and Convert</strong>: Choose the images you want to remove and convert them into a Docker command with a single click.</li>
            <li><strong>Clipboard Copy</strong>: Quickly copy the generated Docker command to your clipboard for immediate use.</li>
            <li><strong>User-Friendly Interface</strong>: The tool provides a clean, intuitive interface with a modern glassmorphism design, making it both aesthetically pleasing and easy to use.</li>
          </ul>

          <h2>How to Use</h2>
          <ol>
            <li><strong>Paste Docker Image Data</strong>: Copy your Docker image data and paste it into the text area provided.</li>
            <li><strong>Review Extracted Data</strong>: The tool will parse the data and display it in a table format, including repository, tag, image ID, creation date, and size.</li>
            <li><strong>Select Images</strong>: Use the checkboxes to select the images you wish to remove.</li>
            <li><strong>Convert to Command</strong>: Click the "Convert" button to generate a Docker command that will remove the selected images.</li>
            <li><strong>Copy to Clipboard</strong>: Click the "Copy to Clipboard" button to copy the generated command for use in your terminal.</li>
          </ol>

          <h2>Example Input</h2>
          <pre className="codeBlock">
            {`repository  tag  imageId      created        size
myapp       v1   abcdef123456 2023-06-20     500MB
myapp       v2   fedcba654321 2023-06-21     600MB`}
          </pre>

          <h2>Example Output Command</h2>
          <pre className="codeBlock">
            {`sudo docker rmi -f abcdef123456 fedcba654321`}
          </pre>

          <h2>Design</h2>
          <p>
            This tool features a modern glassmorphism design, giving it a sleek, semi-transparent look with a subtle blur effect. The design enhances user experience by providing a visually appealing and easy-to-navigate interface.
          </p>

          <h2>Technology Stack</h2>
          <ul>
            <li><strong>Frontend</strong>: React with Next.js</li>
            <li><strong>Styling</strong>: CSS Modules with a glassmorphism effect</li>
            <li><strong>Clipboard Functionality</strong>: Built-in JavaScript APIs</li>
          </ul>

          <h2>License</h2>
          <p>
            This tool is open-source and available under the <a href="LICENSE">MIT License</a>.
          </p>

          <p>
            We hope you find the <strong>Image ID Extractor</strong> useful in your Docker management tasks. Happy coding!
          </p>
        </section>
      </div>
      <footer class="bg-gray rounded-lg shadow m-4 dark:bg-gray-800 fixed-bottom ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://opensecai.com/" class="hover:underline">opensecAi™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
    <footer class="bg-gray rounded-lg shadow m-4 dark:bg-gray-800 fixed-bottom ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://opensecai.com/" class="hover:underline">opensecAi™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://diie.opensecai.com" class="hover:underline me-4 md:me-6">Home</a>
        </li>        
        <li>
            <a href="/about" class="hover:underline me-4 md:me-6">About</a>
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
        .glassmorph {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          max-width: 800px;
          margin: 0 auto;
          text-align: left;
          padding: 20px;
          color: #fff;
        }
        h1, h2 {
          color: #00ffff; /* Neon blue */
        }
        .content p, ul, ol {
          margin-bottom: 20px;
        }
        ul, ol {
          padding-left: 20px;
        }
        .codeBlock {
          background: rgba(0, 0, 0, 0.8);
          padding: 10px;
          border-radius: 8px;
          font-family: 'Courier New', Courier, monospace;
          color: #00ffff; /* Neon blue */
        }
      `}</style>
    </div>
  );
}
