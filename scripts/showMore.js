const listPic = document.querySelector('.list-photos'); 
const btn = document.querySelector('.btn-common.more'); 

let pageToPatch = 1;

btn.addEventListener('click', () => {
    fetchImages(pageToPatch += 1);
});

async function fetchImages(page) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=3`); 

        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        console.log(datas);
        makeImageList(datas);

    } catch (error) {
        console.error(error);
    }
}

function makeImageList(datas) {
    datas.forEach((data) => {
        listPic.insertAdjacentHTML('beforeend', `<li><button type="button"><img src="${data.download_url}" alt="image"></button></li>`);
    });
}