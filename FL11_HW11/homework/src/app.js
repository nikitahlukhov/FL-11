let rootNode = document.getElementById('root');


const addButton = document.getElementById('add_box');
const input = document.getElementById('input');
const ul = document.querySelector('ul');


addButton.onmouseover = () => {
    addButton.style.cursor = 'default';
};



let i = 1;
addButton.onclick = () => {
    if (input.value === '') {
        addButton.setAttribute('disabled', true);
    } else if (ul.children.length > 9) {
        document.querySelector('h6').style.visibility = 'visible';
        addButton.setAttribute('disabled', true);
        input.setAttribute('disabled', true);

    } else if (ul.children.length < 10) {
        i++;
        let newLi = document.createElement('li');
        let name = '<div><input type="checkbox"><p></p>' + 
        '<span id="pen"><i class="material-icons">create</i></span>' + 
        '</div><span><i class="material-icons">delete</i></span>';
        newLi.innerHTML = name;
        newLi.setAttribute('id', i)
        ul.appendChild(newLi);
        let li_txt = document.getElementById(i).querySelector('p');
        let txt = input.value;
        li_txt.innerHTML = txt;
        input.value = '';
        let deleteButton = document.getElementById(i).lastChild;
        deleteButton.onclick = () => {
            let elem = document.querySelector('li');
            ul.removeChild(elem);
            if (ul.children.length < 10) {
                input.removeAttribute('disabled');
                addButton.removeAttribute('disabled');
                document.querySelector('h6').style.visibility = 'hidden';
            }
        }
        deleteButton.onmouseover = () => {
            deleteButton.style.cursor = 'default';
        };

        let checkButton = document.getElementById(i).querySelector('input');
        checkButton.onclick = () => {
            checkButton.setAttribute('disabled', true);
        }

        let editButton = document.getElementById(i).querySelector('span');
        editButton.onmouseover = () => {
            editButton.style.cursor = 'default';
        };


        let text1 = document.querySelector('p').innerHTML;
        editButton.onclick = () => {
            checkButton.style.visibility = 'hidden';
            deleteButton.style.visibility = 'hidden';
            let name1 ='<form ><input type="text" id="edit">' + 
            '<span id="save"><i class="material-icons">save</i>'
             + '</span></form>';

            newLi.innerHTML = name1;

            let text = document.getElementById('edit');
            text.value = text1;
            let saveButton = document.getElementById('save');
            saveButton.onmouseover = () => {
                saveButton.style.cursor = 'default';
            };
            saveButton.onclick = () => {

                newLi.innerHTML = name;
                document.getElementById(i).querySelector('p').innerHTML = text.value;


            }

        }

    }

}
