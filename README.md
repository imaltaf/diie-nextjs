This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# About This Tool

## Image ID Extractor

The **Image ID Extractor** is a handy tool designed to help you manage Docker images efficiently. By pasting your Docker image data into the input field, you can easily extract and manipulate image IDs with a user-friendly interface. This tool is particularly useful for developers and system administrators who need to handle Docker images frequently.

### Features

- **Easy Extraction**: Simply paste your Docker image data into the text area, and the tool will automatically parse and display the relevant information.
- **Select and Convert**: Choose the images you want to remove and convert them into a Docker command with a single click.
- **Clipboard Copy**: Quickly copy the generated Docker command to your clipboard for immediate use.
- **User-Friendly Interface**: The tool provides a clean, intuitive interface with a modern glassmorphism design, making it both aesthetically pleasing and easy to use.

### How to Use

1. **Paste Docker Image Data**: Copy your Docker image data and paste it into the text area provided.
2. **Review Extracted Data**: The tool will parse the data and display it in a table format, including repository, tag, image ID, creation date, and size.
3. **Select Images**: Use the checkboxes to select the images you wish to remove.
4. **Convert to Command**: Click the "Convert" button to generate a Docker command that will remove the selected images.
5. **Copy to Clipboard**: Click the "Copy to Clipboard" button to copy the generated command for use in your terminal.


### Design

This tool features a modern glassmorphism design, giving it a sleek, semi-transparent look with a subtle blur effect. The design enhances user experience by providing a visually appealing and easy-to-navigate interface.

### Technology Stack

- **Frontend**: React with Next.js
- **Styling**: CSS Modules with a glassmorphism effect
- **Clipboard Functionality**: Built-in JavaScript APIs

### License

This tool is open-source and available under the [MIT License](LICENSE).

We hope you find the **Image ID Extractor** useful in your Docker management tasks. Happy coding!


