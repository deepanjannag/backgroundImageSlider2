let imageNumber = 0;

const buttons = document.querySelectorAll('.btn');

buttons.forEach(changeImage);

function changeImage(b) {
    b.addEventListener('click', changer);
}

function changer() {
    if (this.classList.contains('btn-left'))
        imageNumber = (imageNumber + 4) % 5;
    else if (this.classList.contains('btn-right'))
        imageNumber = (imageNumber + 1) % 5;
    let image = 'contBcg-' + imageNumber + '.jpeg';
    document.querySelector('.img-container').style.backgroundImage = "url('img/" + image + "')";
}
