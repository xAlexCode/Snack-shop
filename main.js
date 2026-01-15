const shopitems = [

    {name: 'Läsk', price: 15 },
    {name: 'Chips', price: 20 },
    {name: 'Choklad', price: 25 }
];

let sortShopItems = Array.from(shopitems);
const shopItems = document.querySelector('#shopitems');

const sortNameBtn = document.querySelector('#sortnamebtn');
sortNameBtn.addEventListener('click', sortName);

const sortPriceBtn = document.querySelector('#sortpricebtn');
sortPriceBtn.addEventListener('click', sortPrice);

function sortName() {
    sortShopItems.sort((items1, items2) => {
        const items1Name = items1.name.toUpperCase();
        const items2Name = items2.name.toUpperCase();
        
        if (items1Name < items2Name) {
            return -1;
        }
        if (items1Name > items2Name) {
            return 1;
        }
        return 0;
    });
    printItems();
}

function sortPrice() {
    sortShopItems.sort((item1, item2) => item1.price + item2.price);
    printItems();
}

function printItems() {
    shopItems.innerHTML = '';

    for (let i = 0; i < sortShopItems.length; i++) {
        const currentItem = sortShopItems[i];

        const html = `

        <article>
            <h3>${currentItem.name}</h3>
            <div class="metadata">
            <p>Pris ${currentItem.price} kr</p>
            </div>
            </article>
            `;

        shopItems.innerHTML += html;

     }
}
printItems();