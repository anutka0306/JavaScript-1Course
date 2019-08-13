window.onload = function () {

    const gameObj = {
        step: 'first',
        run() {
            const startStep = parseInt(prompt('Введите номер шага, что бы начать'), 10);
            document.querySelector('.start-step').innerHTML = "Вы начали игру с шага " + startStep;
            const steps = {
                '1': 'first',
                '2': 'second',
                '3': 'third',
            };
            this.step = steps[startStep] || 'first';
            while (true) {
                if (this.step === 'end') {
                    console.log('конец');
                    break;
                } else {
                    this[this.step].nextStep();
                }
            }
        },
        showQuestion(question, firstBranch, secondBranch) {
            const answer = prompt(question).toLowerCase();
            switch (answer) {
                case 'да':
                    this.step = firstBranch;
                    break;
                case 'нет':
                    this.step = secondBranch;
                    break;
                default:
                    console.log('Нужно ответить "да" или "нет"');
            }
        },
        first: {
            question: 'Нужен ответ "да" или "нет"',
            nextStep() {
                gameObj.showQuestion(this.question, 'third', 'second');
            }
        },
        second: {
            question: 'Шаг номер 2',
            nextStep() {
                gameObj.showQuestion(this.question, 'third', 'end');
            }
        },
        third: {
            question: 'Шаг номер 3',
            nextStep() {
                this.step = null;
                gameObj.showQuestion(this.question, 'end', 'end');
            }
        },
    };

    gameObj.run();

}