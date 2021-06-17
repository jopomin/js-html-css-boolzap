var app = new Vue ({
    el: "#root",
    data: {
        newMsg: "",
        activeMsg: {
            index: false,
            visible: false
        },
        x: 0,
        searchInput: "",
        user: 
            {
                name: 'Giovanni PM 🌊🐘',
                avatar: '_me'
            },
        contacts: [
            {
                name: 'Stefania',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '09/06/2020 15:30:55',
                        text: 'Hai portato giù Larry?',
                        status: 'received'
                    },
                    {
                        date: '09/06/2020 15:31:23',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'received'
                    },
                    {
                        date: '09/06/2021 16:15:22',
                        text: 'Siii, non ti preoccupare!',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Prof. Mancini',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '07/06/2021 16:30:00',
                        text: 'Salve prof, a che ora abbiamo lezione domani?',
                        status: 'sent'
                    },
                    {
                        date: '07/06/2021 16:38:55',
                        text: 'Ciao Giovanni, 16 come sempre. Mi dai conferma?',
                        status: 'received'
                    },
                    {
                        date: '07/06/2021 16:40:02',
                        text: 'Certo. A domani allora!',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '05/06/2021 10:10:40',
                        text: 'Ma il numero di Stefano è sempre quello? Sto provando a chiamarlo da ore ma è sempre occupato 😡',
                        status: 'received'
                    },
                    {
                        date: '05/06/2021 10:20:10',
                        text: 'Dai calmati, l\'ha cambiato una vita fa 🤣 Ecco il nuovo 3471234567',
                        status: 'sent'
                    },
                    {
                        date: '05/06/2021 10:25:22',
                        text: 'E me lo dici solo ora? 🤦‍♂️',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '01/06/2021 15:30:55',
                        text: 'Ti ricordi che giovedì è il compleanno di Michele? Dobbiamo ancora pensare al regalo',
                        status: 'sent'
                    },
                    {
                        date: '01/06/2020 15:50:00',
                        text: 'Si si, lo so. Non sono ancora riuscito a trovare un attimo per pensarci...',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Giorgio',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '01/06/2020 13:30:55',
                        text: 'Che pagine si studiavano per domani?',
                        status: 'received'
                    },
                    {
                        date: '01/06/2020 13:40:00',
                        text: 'Da 120 a 143',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Gioia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '31/05/2021 11:22:14',
                        text: 'https://www.amazon.it/Winsor-Newton-acquerelli-confezione-tascabile/dp/B00004THXI questi sono gli acquerelli che mi ha consigliato Michele',
                        status: 'sent'
                    },
                    {
                        date: '31/01/2020 15:50:00',
                        text: 'Grazie mille!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Leandro',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Sandro Tennis Club',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '23/05/2021 14:30:55',
                        text: 'Non credo di riuscire a fare in tempo per la prossima settimana. Tu quando potresti?',
                        status: 'received'
                    },
                    {
                        date: '23/05/2021 14:50:00',
                        text: 'Vediamo un po\', ti chiamo io più tardi e ci organizziamo',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Mamma',
                avatar: '_9',
                visible: true,
                messages: [
                    {
                        date: '13/05/2021 09:30:02',
                        text: 'Prima di ritirarti compra 1kg di pane se riesci',
                        status: 'received'
                    },
                    {
                        date: '13/05/2021 09:55:02',
                        text: 'Ok, sono a casa tra una ventina di minuti',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Zio Mario',
                avatar: '_10',
                visible: true,
                messages: [
                    {
                        date: '09/05/2021 12:45:55',
                        text: 'Ciao zio, che dovevo ricordare a papà?',
                        status: 'sent'
                    },
                    {
                        date: '09/05/2021 13:03:00',
                        text: 'Digli di portarmi la macchina sabato mattina così gli do un\'occhiata',
                        status: 'received'
                    }
                ],
            },
        ]
    },

    methods: {
        addMsg(x) {

            this.contacts[x].messages.push({
                date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
                text: this.newMsg,
                status: 'sent'
            });

            this.newMsg = "";

            setTimeout( () => this.autoMsg(x), 3000);

        },

        autoMsg(x) {
            this.contacts[x].messages.push({
                date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
                text: 'Ok',
                status: 'received'
            });
        },

        showMsg(i) {
            this.x = i;
        },

        searchContact() {
            let self = this;
            this.contacts.forEach((element) => {
                console.log(element);
                if (element.name.toLowerCase().includes(self.searchInput.toLowerCase())) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        },

        showOptions(i) {
            if (this.activeMsg.index !== false && this.activeMsg.index !== i) {
                this.activeMsg.visible = false;
                this.activeMsg.index = false;
            }
            this.activeMsg.visible = (this.activeMsg.visible) ? false : true;
            this.activeMsg.index = i;
        },

        delMsg(i) {
            this.contacts[this.x].messages.splice(i, 1);
            this.activeMsg.visible = false;
            this.activeMsg.index = false;
        },

        getLastMsg(i) {
            return this.contacts[i].messages[this.contacts[i].messages.length -1].text.slice(0, 30) + '...'; 
        },

        getLastDate(i) {
            return this.contacts[i].messages[this.contacts[i].messages.length -1].date;
        }
    }
},
)