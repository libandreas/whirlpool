# Find Similar Words in Your Files / Whirlpool Search

Search for names, numbers, similar words and related terms across your files and folders. All offline, no uploads.

Find exact matches, typos and related concepts in PDFs, office documents and scanned images without opening files one by one. Everything runs locally on your computer.

## Main features

* Select individual files or entire folders and search their contents together.
* Search for names, numbers, words, and phrases across documents.
* Find exact matches, spelling variations, and words with similar written forms.
* Find related terms using local FastText word vectors.
* Read text in scanned PDFs and images with Tesseract OCR.
* Adjust the similarity threshold to narrow or broaden the results.
* Open matching documents and highlight the words found on the page.
* Keep adding files and folders while background processing continues.
* Save the working session and search index locally on your computer.

## How it works

1. Add files or select the folders you want to search.
2. Whirlpool reads supported documents and extracts their text. When OCR is enabled, it also recognizes text in scanned pages and images.
3. The extracted text is indexed locally for searching.
4. Enter a word or phrase and adjust the similarity threshold as needed.
5. Review the matching files and pages, then open a result to see the matching words in context.

You choose which files and folders Whirlpool can access. Selecting a folder does not upload its contents to a processing server.

## Search Customer Records and Invoices

Find customer names, company names, invoice numbers, and payment references across contracts, receipts, and spreadsheets. Whirlpool searches both digital text and scanned paper invoices, highlighting the exact location of the match on the document page.

## Search Email Attachments

Connect Outlook or Gmail to search attachments across all your accounts alongside your local files. Whirlpool retrieves attachments through an authenticated connection and processes them entirely on your computer, keeping all your communications private.

## Locate Files in File Explorer

Once you find what you need, jump straight to the source. Whirlpool lets you open matching files directly or reveal their exact location in Windows File Explorer with a single click. You can also drag found images directly into an email, CMS, or upload field.

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

FastText represents words as numerical vectors. Whirlpool uses these vectors locally to compare terms and find related words beyond an exact text match. This is useful when a document uses different wording from the search query.

### Tesseract OCR

Scanned documents and photographs often contain visible text without a selectable text layer. Whirlpool uses Tesseract OCR to recognize that text so it can be included in the search index.

Select the appropriate OCR language for your documents. Recognition quality depends on image quality, page orientation, language, and legibility of the text.

## Supported document types

Whirlpool supports PDFs, images, Word documents, Excel spreadsheets, PowerPoint presentations, text files, and log files. Scanned documents and technical drawings can be searched through OCR when they contain recognizable text.

## Local processing

Document parsing, OCR, and search run completely on your device. Your files and search queries stay private and never leave your computer.

## Bug Reports and Issues
https://github.com/libandreas/whirlpool/issues

## Website
https://libandreas.github.io/whirlpool/
