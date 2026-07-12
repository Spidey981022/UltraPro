export default function setting(){
    const setting = document.querySelector('#settings');
    const settingButton = document.querySelector('.setting');

    settingButton.addEventListener('click', e => {
        setting.style.display = 'block';
    })

    //RESETTING DATA
    const resetAccount = document.querySelector('.reset-account button');
    const reset = document.querySelector('.reset-account');
    resetAccount.addEventListener('click', ()=>{
        localStorage.clear();
        location.reload();
        const para = document.createElement('p');
        para.classList.add('reset-warning');
        reset.appendChild(para);
        para.textContent = 'ACCOUNT RESET SUCCESSFULLY';
        para.style.marginTop = '10px';
        para.style.color = 'Red';
    })
}