// ========================================== Basic

const basicModal = new Popzy({
    // content: "This is content",
    // content: `<p class="thank">This is content</p>`,
    templateId: "basic-modal",
    footer: false,
    destroyOnClose: true,
    closeMethods: ["overlay", "button", "escape"],
    cssClass: ["custom-class-1"],
    enableScrollLock: true,
    scrollLockTarget: function () {
        return document.body;
    },
    onOpen: function () {
        console.log(`Modal opened`);
    },
    onClose: function () {
        console.log(`Modal closed`);
    },
});

const basicModalBtn = document.querySelector(`#basic-modal-btn`);

basicModalBtn.addEventListener(`click`, function () {
    basicModal.open();
});

// ========================================== Large

const largeModal = new Popzy({
    // content: "This is content",
    templateId: "large-modal",
    footer: false,
    destroyOnClose: false,
    enableScrollLock: false,
    closeMethods: ["overlay", "button", "escape"],
    cssClass: ["custom-class-1"],
    onOpen: function () {
        console.log(`Modal opened`);
    },
    onClose: function () {
        console.log(`Modal closed`);
    },
});

const largeModalBtn = document.querySelector(`#large-modal-btn`);

largeModalBtn.addEventListener(`click`, function () {
    largeModal.open();
});

// ==========================================  Mul

const mulModal = new Popzy({
    // content: "This is content",
    templateId: "mul-modal",
    footer: true,
    destroyOnClose: false,
    closeMethods: ["overlay", "button", "escape"],
    cssClass: ["custom-class-1"],
    onOpen: function () {
        console.log(`Modal opened`);
    },
    onClose: function () {
        console.log(`Modal closed`);
    },
});

const mulModalBtn = document.querySelector(`#mul-modal-btn`);

mulModalBtn.addEventListener(`click`, function () {
    mulModal.open();
});

const mulModal_son = new Popzy({
    // content: "This is content",
    templateId: "mul-modal-son",
    footer: false,
    destroyOnClose: false,
    closeMethods: ["overlay", "button", "escape"],
    cssClass: ["custom-class-1"],
    onOpen: function () {
        console.log(`Modal opened`);
    },
    onClose: function () {
        console.log(`Modal closed`);
    },
});

mulModal.addFooterButton(
    `Click me to see other!!!!`,
    `modal-btn-test blue`,
    function () {
        mulModal_son.open();
    }
);

// ==========================================  Footer content

const footerContentModal = new Popzy({
    // content: "This is content",
    templateId: "footer-content-modal",
    footer: true,
    destroyOnClose: false,
    closeMethods: ["overlay", "button", "escape"],
    cssClass: ["custom-class-1"],
    onOpen: function () {
        console.log(`Modal opened`);
    },
    onClose: function () {
        console.log(`Modal closed`);
    },
});

footerContentModal.setFooterContent(
    `<h2>Hi i am Footer</h2>
    <p>
        Lorem ipsum dolor sit  meow meow gow doloremque.
    </p>
    `
);

const footerContentModalBtn = document.querySelector(
    `#footer-content-modal-btn`
);
footerContentModalBtn.addEventListener(`click`, function () {
    footerContentModal.open();
});

// ==========================================  Footer content

const footerBtnsModal = new Popzy({
    // content: "This is content",
    templateId: "footer-btns-modal",
    footer: true,
    destroyOnClose: false,
    closeMethods: ["overlay", "button", "escape"],
    cssClass: ["custom-class-1"],
    onOpen: function () {
        console.log(`Modal opened`);
    },
    onClose: function () {
        console.log(`Modal closed`);
    },
});

footerBtnsModal.addFooterButton(`Cancel`, `modal-btn-test red`, function () {
    footerBtnsModal.close();
});
footerBtnsModal.addFooterButton(`Submit`, `modal-btn-test green`, function () {
    footerBtnsModal.close();
});

const footerBtnsModalBtn = document.querySelector(`#footer-btns-modal-btn`);
footerBtnsModalBtn.addEventListener(`click`, function () {
    footerBtnsModal.open();
});

//  ==================================
//  Mobile navbar

const mobile__navBtn = document.querySelector(`#mobile__nav-btn`);
const mobile__navBackdrop = document.createElement(`div`);
mobile__navBackdrop.classList.add(`mobile__nav-backdrop`);
mobile__navBackdrop.innerHTML = `<ul class="mobile__nav-list">
                    <li class="mobile__nav-item"><a href="#sample">Sample</a></li>
                    <li class="mobile__nav-item">
                        <a href="#installation">Installation</a>
                    </li>
                    <li class="mobile__nav-item"><a href="#usage">Usage</a></li>
                    <li class="mobile__nav-item"><a href="#options">Options</a></li>
                    <li class="mobile__nav-item"><a href="#styling">Styling</a></li>
                    <li class="mobile__nav-item"><a href="#api">API</a></li>
                </ul>`;

mobile__navBtn.addEventListener(`click`, function () {
    document.body.appendChild(mobile__navBackdrop);
    setTimeout(() => {
        mobile__navBackdrop.classList.add(`transit-show`);
    }, 0);
});

mobile__navBackdrop.addEventListener(`click`, function (e) {
    if (e.target === mobile__navBackdrop) {
        mobile__navBackdrop.classList.remove(`transit-show`);
        setTimeout(() => {
            document.body.removeChild(mobile__navBackdrop);
        }, 300);
    }
});

//  ==================================

function addTemplate(containArray, templateArray, datasetName) {
    if (!containArray || !templateArray || !datasetName) {
        return console.log(`Invalid argument `);
    }

    containArray.forEach(function (block, index) {
        const targetValue = block.dataset[datasetName];
        let template = null;

        Array.from(templateArray).some(function (value2) {
            if (value2.dataset[datasetName] === targetValue) {
                template = value2;
                return true;
            }
        });
        block.appendChild(template.content);
    });
}

// table template

const tableBlockList = document.querySelectorAll(`.table-block`);
const tableTemplateList = document.querySelectorAll(`.table-template`);
addTemplate(tableBlockList, tableTemplateList, `fortable`);

const codeBLockList = document.querySelectorAll(`.code-block`);
const codeTemplateList = document.querySelectorAll(`.code-template`);
addTemplate(codeBLockList, codeTemplateList, `fortable`);

// 翻译
