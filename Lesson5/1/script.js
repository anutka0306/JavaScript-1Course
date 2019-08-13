window.onload = function () {


    function rowsCreate() {
        const rowsCount = 8;
        const colsCount = 8;
        const letters =['A','B','C','D','E','F','G','H'];
        const rows = [];
        let figure;
        function Figure(name, color, img) {
           this.name = name;
           this.color = color;
           this.img = img;
        }

        for (let i = rowsCount-1; i >= 0 ; i--) {
            let row = document.createElement('div');
            row.innerText = i+1;
            row.classList.add('board__row');
            rows.push(row);
        }

        rows.forEach(function (item, key, rows) {
            for(let i = 0; i < colsCount; i++){
                let col = document.createElement('div');

                if(key%2){
                    (i%2) ? col.classList.add('board__col_white') : col.classList.add('board__col_black');
                }
                else{
                    (i%2) ? col.classList.add('board__col_black') : col.classList.add('board__col_white');
                }

                if(key == 1){
                    figure = new Figure("Пешка", "Black", "<img src='img/peshka-b.png'>");
                    col.innerHTML = figure.img;
                }
                else if(key == colsCount - 2){
                    figure = new Figure("Пешка", "White", "<img src='img/peshka-w.png'>");
                    col.innerHTML = figure.img;
                }
                else if(key ==0){
                    switch (letters[i]) {
                        case "A":
                        case "H":
                            figure = new Figure("Ладья", "Black", "<img src='img/ladia-b.png'>");
                            break;
                        case "B":
                        case "G":
                            figure = new Figure("Конь", "Black", "<img src='img/kon-b.png'>");
                            break;
                        case "C":
                        case "F":
                            figure = new Figure("Слон", "Black", "<img src='img/slon-b.png'>");
                            break;
                        case "D":
                            figure = new Figure("Ферзь", "Black", "<img src='img/ferz-b.png'>");
                            break;
                        case "E":
                            figure = new Figure("Король", "Black", "<img src='img/king-b.png'>");
                            break;
                        default:

                    }
                    col.innerHTML = figure.img + '<p style="z-index:100; position: absolute; top:0; color: red; background:white;">'+ letters[i] + '</p>';
                }

                else if(key ==colsCount-1){
                    switch (letters[i]) {
                        case "A":
                        case "H":
                            figure = new Figure("Ладья", "White", "<img src='img/ladia-w.png'>");
                            break;
                        case "B":
                        case "G":
                            figure = new Figure("Конь", "White", "<img src='img/kon-w.png'>");
                            break;
                        case "C":
                        case "F":
                            figure = new Figure("Слон", "White", "<img src='img/slon-w.png'>");
                            break;
                        case "D":
                            figure = new Figure("Ферзь", "White", "<img src='img/ferz-w.png'>");
                            break;
                        case "E":
                            figure = new Figure("Король", "White", "<img src='img/king-w.png'>");
                            break;
                        default:

                    }
                    col.innerHTML = figure.img;
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

