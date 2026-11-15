const demo = document.querySelector('.demo');
const customerDemo = demo.dataset.demo === 'customers';
const searchTerm = customerDemo ? 'Asterion Marine Ltd' : 'insurance';
const folderName = customerDemo ? 'Customer records' : 'Insurance documents';
const searchEndsAt = 15.65;
const firstClickAt = searchEndsAt + 1;
const secondClickAt = firstClickAt + 1.2 + 1;
const completeAt = secondClickAt + 1.5;
const dragStartsAt = completeAt + 3;
const dropAt = dragStartsAt + 2;
const duration = (dropAt + 4) * 1000;
const picker = document.querySelector('.folder-dialog');
const folder = document.querySelector('#chosen-folder');
const access = document.querySelector('#access-folder');
const select = document.querySelector('#select-folder');
const search = document.querySelector('#search-button');
const query = document.querySelector('.query');
const searchIcon = document.querySelector('.search-icon');
const collection = document.querySelector('.collection');
const list = document.querySelector('.file-list');
const status = document.querySelector('.status');
const cursor = document.querySelector('.cursor');
const documentViews = [...document.querySelectorAll('.document')];
const documentScrolls = [...document.querySelectorAll('.document-scroll')];
const firstMatch = document.querySelector(customerDemo ? '#match-customer' : '#match-insurance');
const secondMatch = document.querySelector(customerDemo ? '#match-customer-scan' : '#match-coverage');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const files = customerDemo ? [
	['Service Agreement.pdf', [['Asterion Marine Ltd', 3], ['2048', 2]]],
	['Payment Receipt.pdf', [['Asterion Marine Ltd', 1], ['INV-2026-0142', 1]]],
	['Purchase Order.pdf', [['Asterion Marine', 2], ['2048', 1]]],
	['Delivery Note.pdf', [['Asterion Marine Ltd', 1]]],
	['Receipt-084-scan.pdf', [['Asterion Marine', 1], ['2048', 1]]],
	['Maintenance Contract.pdf', [['Asterion Marine Ltd', 4]]],
	['Customer Contact Details.pdf', [['Asterion Marine Ltd', 2]]],
	['Customer List.xlsx', [['Asterion Marine', 1]]],
	['Customer Record.pdf', [['Asterion Marine Ltd', 1], ['2048', 2]]],
	['Invoice-0142-scan.pdf', [['Asterion Marine Ltd', 1], ['INV-2026-0142', 2]]]
] : [
	['Invoice-2026.pdf', [['premium', 2]]],
	['Claim Form.pdf', [['claim', 4], ['insurance', 1]]],
	['Utility Bill.pdf', [['payment', 2]]],
	['Lease Agreement.pdf', [['coverage', 1], ['deductible', 2]]],
	['Scanned Receipt.pdf', [['premium', 1]]],
	['Supplier Invoice.pdf', [['payment', 3]]],
	['Policy Terms.pdf', [['policy', 5], ['coverage', 3]]],
	['Claims Guide.pdf', [['claim', 4], ['insurance', 2]]],
	['Policy Document.pdf', [['insurance', 3], ['policy', 6], ['coverage', 4]]],
	['Insurance Policy-scan.pdf', [['coverage', 3], ['deductible', 2], ['exclusions', 1]]]
];
for (const [name, terms] of files) {
	const file = document.createElement('div');
	file.className = 'file';
	const title = document.createElement('div');
	title.className = 'file-title';
	for (const value of ['✓', name, 'drag', '📁']) {
		const span = document.createElement('span');
		span.textContent = value;
		if (value === 'drag') {
			span.className = 'file-drag';
			span.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M2 12h20M8 6l4-4 4 4M8 18l4 4 4-4M6 8l-4 4 4 4M18 8l4 4-4 4"/></svg>';
			span.title = 'Drag file';
		}
		title.append(span);
	}
	const keywords = document.createElement('div');
	keywords.className = 'keywords';
	for (const [term] of terms) {
		const keyword = document.createElement('span');
		keyword.className = 'keyword';
		keyword.dataset.term = term;
		keyword.append(document.createTextNode(term));
		keywords.append(keyword);
	}
	file.append(title, keywords);
	list.append(file);
}
const entries = [...list.children];
const viewer = document.querySelector('.viewer');
const destination = document.createElement('section');
destination.className = 'transfer-destination ' + (customerDemo ? 'hubspot-demo' : 'gmail-demo');
destination.hidden = true;
destination.innerHTML = customerDemo
	? '<header class="hubspot-top"><strong>HubSp<span>o</span>t</strong><span>⌕　⚙　●</span></header><div class="hubspot-shell"><nav class="hubspot-rail">⌂<b>▦</b>♧<span>▤</span>▥</nav><div class="destination-body"><div class="crm-breadcrumb">‹ Companies</div><div class="destination-contact"><span class="company-avatar">▦</span><strong>Asterion Marine Ltd</strong><small>2048 · Customer</small></div><div class="crm-actions">✎　✉　☎　＋</div><div class="crm-tabs"><strong>Overview</strong><span>Activities</span></div><section class="crm-attachments"><h3>⌄ Attachments <span>＋</span></h3><div class="attachment-drop">Drop file here</div><div class="attached-file" hidden></div></section></div></div>'
	: '<header class="gmail-top"><span>☰</span><strong><svg viewBox="0 0 24 18" aria-hidden="true"><path d="M2 16V3l10 7 10-7v13" fill="none" stroke="#4285f4" stroke-width="4"/><path d="M2 16V3" stroke="#34a853" stroke-width="4"/><path d="M22 16V3" stroke="#fbbc04" stroke-width="4"/><path d="m2 3 10 7 10-7" fill="none" stroke="#ea4335" stroke-width="4"/></svg>Gmail</strong><span class="gmail-search">⌕ Search mail</span><span>⚙</span></header><div class="gmail-shell"><nav class="gmail-rail"><b>✎</b><span>▣</span><span>☆</span><span>➤</span><span>▤</span></nav><section class="gmail-compose"><header class="gmail-compose-title"><strong>New Message</strong><span>−　⤢　×</span></header><div class="destination-body"><div class="email-field"><span>To</span> client@example.com <small>Cc Bcc</small></div><div class="email-field">Insurance policy</div><p>Please find your insurance policy attached.</p><div class="attachment-drop">Drop files here</div><div class="attached-file" hidden></div><footer class="gmail-compose-actions"><span class="send-email">Send　▾</span><span> A　♧　↗　☺　▧</span><span>⋮　♜</span></footer></div></section></div>';
viewer.append(destination);
const dropZone = destination.querySelector('.attachment-drop');
const attachment = destination.querySelector('.attached-file');
const draggedFile = document.createElement('div');
draggedFile.className = 'dragged-file';
draggedFile.hidden = true;
demo.append(draggedFile);
const transferEntry = customerDemo ? entries.at(-1) : entries.at(-2);
const dragHandle = transferEntry.querySelector('.file-drag');
const attachmentName = files[customerDemo ? files.length - 1 : files.length - 2][0];
draggedFile.append(transferEntry.querySelector('.file-title').cloneNode(true));
attachment.textContent = '📎 ' + attachmentName;
const keywordGroups = [...list.querySelectorAll('.keywords')];
const firstKeyword = customerDemo
	? entries.at(-2).querySelector('[data-term="Asterion Marine Ltd"]')
	: entries.at(-2).querySelector('[data-term="insurance"]');
const secondKeyword = customerDemo
	? entries.at(-1).querySelector('[data-term="Asterion Marine Ltd"]')
	: entries.at(-1).querySelector('[data-term="coverage"]');
let elapsed = 0;
let lastTime = null;
let frame = 0;
let visible = false;
let collectionTime = 0;

function progress(time, start, end) {
	const value = Math.min(1, Math.max(0, (time - start) / (end - start)));
	return value * value * (3 - 2 * value);
}

function render(time) {
	const loaded = time >= 5.5;
	const results = time >= 11.6;
	const opened = time >= firstClickAt;
	const second = time >= secondClickAt;
	const transferring = time >= completeAt + 2;
	const dragging = time >= dragStartsAt && time < dropAt;
	const attached = time >= dropAt;
	destination.hidden = !transferring;
	draggedFile.hidden = !dragging;
	dropZone.hidden = attached;
	dropZone.classList.toggle('drag-over', dragging);
	attachment.hidden = !attached;
	const searching = time >= 11 && time < searchEndsAt;
	searchIcon.textContent = searching ? '⌛' : '🔍';
	searchIcon.classList.toggle('is-searching', searching);
	picker.hidden = time < 2 || loaded;
	folder.classList.toggle('selected', time >= 3.7);
	document.querySelector('.folder-name').textContent = time >= 3.7 ? folderName : '';
	document.querySelector('.welcome').hidden = loaded;
	collection.hidden = !loaded;
	document.querySelector('.score').hidden = !results;
	demo.classList.toggle('typing', time >= 9);
	query.textContent = time < 9 ? 'Search documents' : searchTerm.slice(0, Math.ceil(progress(time, 9, 10.4) * searchTerm.length));
	entries.forEach((entry, index) => {
		entry.hidden = time < 5.5 + index * .25;
		keywordGroups[index].hidden = time < 11.6 + index * .45;
	});
	const documentIndex = second ? 1 : 0;
	documentViews.forEach((view, index) => {
		view.hidden = !opened || transferring || index !== documentIndex;
	});
	demo.classList.toggle('viewing', opened);
	document.querySelector('.viewer').hidden = !opened;
	const maxScroll = Math.max(0, collection.scrollHeight - collection.clientHeight);
	const scrollTarget = maxScroll * progress(time, 6, 8.5);
	if (customerDemo && loaded && !reducedMotion.matches && time >= collectionTime) {
		const seconds = Math.min(.1, time - collectionTime);
		collection.scrollTop += (scrollTarget - collection.scrollTop) * (1 - Math.exp(-seconds / .14));
	} else {
		collection.scrollTop = scrollTarget;
	}
	collectionTime = time;
	firstKeyword.classList.toggle('active', opened && !second);
	secondKeyword.classList.toggle('active', second);
	firstMatch.classList.toggle('active', opened && !second);
	secondMatch.classList.toggle('active', second);
	const documentScroll = documentScrolls[documentIndex];
	documentScrolls.forEach((scroll, index) => {
		if (!opened || index !== documentIndex) scroll.scrollTop = 0;
	});
	if (opened && !transferring) {
		const targetMatch = second ? secondMatch : firstMatch;
		const destination = targetMatch.getBoundingClientRect().top - documentScroll.getBoundingClientRect().top + documentScroll.scrollTop - documentScroll.clientHeight * .35;
		documentScroll.scrollTop = destination * (second ? progress(time, secondClickAt, completeAt) : progress(time, firstClickAt, firstClickAt + 1.2));
	}
	demo.classList.toggle('complete', time >= completeAt);
	status.textContent = time >= completeAt ? (customerDemo ? '✓ Name found in scanned invoice' : '✓ Match found') : opened ? 'Opening matching word…' : time >= searchEndsAt ? 'Select a keyword' : results ? (customerDemo ? 'Finding names and numbers…' : 'Finding similar words…') : time >= 11 ? 'Searching…' : time >= 8.5 ? '10 files ready' : loaded ? 'Loading documents…' : 'Choose a folder to begin';
	let target;
	let approach;
	if (time < 2) {
		target = access;
		approach = progress(time, .4, 1.7);
	} else if (time < 4.2) {
		target = folder;
		approach = progress(time, 2.3, 3.6);
	} else if (time < 5.5) {
		target = select;
		approach = progress(time, 4.2, 5.1);
	} else if (time < 11.6) {
		target = time < 10.5 ? query : search;
		approach = time < 10.5 ? progress(time, 8.6, 9) : progress(time, 10.5, 11);
	} else {
		target = time < secondClickAt - 1 ? firstKeyword : secondKeyword;
		approach = time < secondClickAt - 1 ? progress(time, firstClickAt - 1, firstClickAt - .2) : progress(time, secondClickAt - 1, secondClickAt - .1);
	}
	cursor.hidden = (time >= 5.5 && time < 8.6) || (time >= 11.6 && time < firstClickAt - 1) || time >= completeAt;
	const bounds = target.getBoundingClientRect();
	cursor.style.left = (bounds.left + bounds.width * .6) / window.innerWidth * 100 + (1 - approach) * 5 + 'vw';
	cursor.style.top = (bounds.top + bounds.height * .55) / window.innerHeight * 100 + (1 - approach) * 7 + 'vh';
	cursor.classList.toggle('pressing', [1.8, 3.7, 5.2, 11.1, firstClickAt, secondClickAt].some(click => time >= click && time < click + .18));
	if (transferring) {
		status.textContent = attached ? '✓ File attached' : customerDemo ? 'Drag the file into CRM' : 'Drag the file into the email';
		const handleBounds = dragHandle.getBoundingClientRect();
		const rowBounds = transferEntry.querySelector('.file-title').getBoundingClientRect();
		const dropBounds = dropZone.getBoundingClientRect();
		const travel = progress(time, dragStartsAt, dropAt);
		const x = handleBounds.left + handleBounds.width / 2;
		const y = handleBounds.top + handleBounds.height / 2;
		const left = x + (dropBounds.left + dropBounds.width / 2 - x) * travel;
		const top = y + (dropBounds.top + dropBounds.height / 2 - y) * travel;
		cursor.hidden = attached;
		cursor.classList.toggle('pressing', dragging);
		cursor.style.left = left + 'px';
		cursor.style.top = top + 'px';
		draggedFile.style.width = rowBounds.width + 'px';
		draggedFile.style.left = left - (x - rowBounds.left) + 'px';
		draggedFile.style.top = top - (y - rowBounds.top) + 'px';
	}
}

function animate(time) {
	if (lastTime !== null) elapsed = (elapsed + time - lastTime) % duration;
	lastTime = time;
	render(elapsed / 1000);
	frame = requestAnimationFrame(animate);
}

function updatePlayback() {
	cancelAnimationFrame(frame);
	lastTime = null;
	if (reducedMotion.matches) render(31);
	else if (visible && !document.hidden) frame = requestAnimationFrame(animate);
}

new IntersectionObserver(([entry]) => {
	visible = entry.isIntersecting;
	updatePlayback();
}).observe(demo);
document.addEventListener('visibilitychange', updatePlayback);
reducedMotion.addEventListener('change', updatePlayback);
window.addEventListener('resize', () => render(reducedMotion.matches ? 31 : elapsed / 1000));
render(reducedMotion.matches ? 31 : 0);
