var app = new Vue ({
    el: "#root",
    data: {
        newMsg: "",
        activeMsg: {
            index: false,
            visible: false
        },
        x: 0,
        f: [],
        searchInput: "",
        user: 
            {
                name: 'Giovanni Porcelli',
                avatar: '_me'
            },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
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
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
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
                name: 'Giorgio',
                avatar: '_5',
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
                name: 'Gioia',
                avatar: '_6',
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
                name: 'Fabrizio',
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
                name: 'Giovanni',
                avatar: '_8',
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
        ]
    },

    methods: {
        addMsg(x) {

            this.contacts[x].messages.push({
                date: dayjs().format('DD MM YYYY hh:mm:ss'),
                text: this.newMsg,
                status: 'sent'
            });

            this.newMsg = "";

            setTimeout( () => this.autoMsg(x), 1000);

        },

        autoMsg(x) {
            this.contacts[x].messages.push({
                date: dayjs().format('DD MM YYYY hh:mm:ss'),
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