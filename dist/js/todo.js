let addBtn = document.querySelector('#add-btn');
let itemName = document.querySelector('#item-name');
let item = document.querySelector('#item');

item.addEventListener('click', (e) => {
    let target = e.target;
    let tag = target.tagName.toLowerCase();

    // 因為結構上 input 與 div 上一層都是 li
    if (tag == 'input' || tag == 'div') {
        target = target.parentNode;
        tag = target.tagName.toLowerCase();
    }

    // 當為 li 時表示處理該項目，過濾點到 UL
    if (tag == 'li') {
        let isDone = target.classList.contains('delete');
        if (isDone) {
            // 變成未完成
        } else {
            // 變成完成
        }
    }
})

const appendItem = (name) => {
    let li = document.createElement('li');
    let input = document.createElement('input');
    let div = document.createElement('div');

    div.innerHTML = name;
    input.type = 'checkbox';

    li.appendChild(input);
    li.appendChild(div);

    item.appendChild(li); // 效能比較好
}

const appendItemES6 = (name) => {
    let li = `<li>
        <input type="checkbox">
        <div>${name}</div>
    </li>`;
    item.innerHTML += li; // 效能比較差
}

addBtn.addEventListener('click', () => {
    if (!valid()) {
        reset();
        return;
    }

    let name = itemName.value;
    // appendItem(name);
    appendItemES6(name);
    reset();

    // 寫法二
    // if (valid()) {
    //     let name = itemName.value;
    //     appendItemES6(name);
    // }
})

const valid = () => {
    return itemName && itemName.value;
}

const reset = () => {
    itemName.value = '';
    itemName.focus();
}