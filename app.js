const app = Vue.createApp({
    // template: '<h2>Vue Template</h2>'
    data() {
        return {
            url: "https://google.com",
            showBooks: false,
            title: 'TEST TITLE',
            author: "TEST AUTHOR",
            age: 45,
            x: 0,
            y: 0,
            books: [
                { title: 'book 1', author: 'author 1', isFav: true },
                { title: 'book 2', author: 'author 2', isFav: false },
                { title: 'book 3', author: 'author 3', isFav: false },
            ]
        }
    },
    methods: {
        decreaseAge() {
            this.age--;
        },
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount('#app');