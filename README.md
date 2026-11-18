# Find Similar Words in Your Files / Whirlpool File Search

Whirlpool File Search is a desktop app that finds exact matches, similar spellings and related terms in the files and folders you select. For example, you can find a customer’s name across scanned invoices.

The search combines exact matches, similar spellings, and related terms. You can find a document even when you do not remember its filename or the exact wording used inside it.

[Website and demonstrations](https://libandreas.github.io/whirlpool/)

## Purpose of the project

Finding a document often means opening files one by one or remembering exactly where something was saved. A filename search cannot tell you which invoice contains a company name or which scanned page mentions a particular reference number.

Whirlpool brings the contents of your selected files into one searchable collection. It reads the documents, recognizes text in images when OCR is enabled, and lets you search across them together.

## Main features

- Select individual files or entire folders and search their contents together.
- Search for names, numbers, words, and phrases across documents.
- Find exact matches, spelling variations, and words with similar written forms.
- Find related terms using local FastText word vectors.
- Read text in scanned PDFs and images with Tesseract OCR.
- Adjust the similarity threshold to narrow or broaden the results.
- Open matching documents and highlight the words found on the page.
- Keep adding files and folders while background processing continues.
- Save the working session and search index locally on your computer.

## How it works

1. Add files or select the folders you want to search.
2. Whirlpool reads supported documents and extracts their text. When OCR is enabled, it also recognizes text in scanned pages and images.
3. The extracted text is indexed locally for searching.
4. Enter a word or phrase and adjust the similarity threshold as needed.
5. Review the matching files and pages, then open a result to see the matching words in context.

You choose which files and folders Whirlpool can access. Selecting a folder does not upload its contents to a processing server.

## Exact matches, similar spellings, and related words

Whirlpool uses several matching methods because remembering a document does not always mean remembering its exact wording.

| Search method | What it helps you find |
| --- | --- |
| Exact matching | The same word or number in your selected documents. |
| Spelling similarity | Words with small spelling differences, typing errors, or similar sequences of letters. |
| Word variations | Matching forms through methods such as prefix and abbreviation matching. |
| FastText similarity | Different words that are related in meaning according to the loaded language model. |

Spelling similarity and semantic similarity serve different purposes. Two words can look alike without meaning the same thing, while related words may have very different spellings. Whirlpool combines these approaches and lets you control how broad the search should be.

### FastText

FastText represents words as numerical vectors. Whirlpool uses these vectors locally to compare terms and find related words beyond an exact text match.

This is useful when a document uses different wording from the search query. The matches depend on the language model and the similarity threshold; related terms are not guaranteed to be interchangeable synonyms.

### Tesseract OCR

Scanned documents and photographs often contain visible text without a selectable text layer. Whirlpool uses Tesseract OCR to recognize that text so it can be included in the search index.

Select the appropriate OCR language for your documents. Recognition quality depends on the image quality, page orientation, language, and legibility of the text. After changing processing settings, use **Refresh Indexing** to process the saved documents again.

### PDF.js

PDF.js reads PDF documents and extracts their text and images. Whirlpool uses the extracted content for indexing and displays matching passages in its document viewer.

## Supported document types

Whirlpool supports PDFs, images, Word documents, Excel spreadsheets, PowerPoint presentations, text files, and log files. Scanned documents and technical drawings can be searched through OCR when they contain recognizable text.

Support depends on the file format and its contents. Databases are not currently supported.

## Local processing

Document parsing, OCR, and search run on your device. Your selected documents and search queries are not uploaded to our servers for these operations.

OCR language files and search models may need to be downloaded before use. License checks, product notices, and usage statistics can involve external connections.

## Demonstrations

The website includes two animated demonstrations:

- Searching documents and highlighting matching words in a document.
- Finding a customer or company across customer records and scanned invoices.

These demonstrations illustrate the application's workflow. To search your own documents, use the Whirlpool application.

## About this repository

This repository contains Whirlpool's public website and demonstrations. The application source code, document-processing workers, OCR resources, search models, and private configuration are not included.

- `index.html`: the main product page.
- `web/`: stylesheets, JavaScript, images, English and Greek demonstrations.
- `README.md`: project overview.

## Website

- [Whirlpool File Search website](https://libandreas.github.io/whirlpool/)

## Website languages

- `index.html`: English page.
- `index-el.html`: separate, hand-written Greek page.
- `web/`: supporting styles, scripts and assets.
