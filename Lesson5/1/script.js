window.onload = function () {


    function rowsCreate() {
        const rowsCount = 8;
        const colsCount = 8;
        const letters =['A','B','C','D','E','F','G','H'];

        const rows = [];
        for (let i = rowsCount-1; i >= 0 ; i--) {
            let row = document.createElement('div');
            row.innerText = i+1;
            row.classList.add('board__row');
            rows.push(row);
        }

        rows.forEach(function (item, key, rows) {
            for(let i = 0; i < colsCount; i++){
                let col = document.createElement('div');
                if(key == 0 || key == colsCount-1){
                    col.innerText = letters[i];
                }
                if(key%2){
                    (i%2) ? col.classList.add('board__col_white') : col.classList.add('board__col_black');
                }
                else{
                    (i%2) ? col.classList.add('board__col_black') : col.classList.add('board__col_white');
                }

                item.appendChild(col);
            }
        });

        return draw(rows);
    }


    function draw(rows) {
        const bordWrapper = document.querySelector('.board__container');
        rows.forEach(function (item, key, rows) {
            bordWrapper.appendChild(item);
        });

    }

    rowsCreate();

}

