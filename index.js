var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        test: 'test',
        count: 0,
        bonus: 1680,
        bonus_count: 0
    },
    methods: {
        rand(){
            this.test = getRandomInt(1, 65536)
            this.count++
            if(this.bonus >= this.test){
                this.bonus_count++
            }
        },
        reset(){
            this.count = 0;
            this.bonus_count = 0;
        }
    }

})

var app8 = new Vue({
    el: '#app-8',
    data: {
        test: 'test',
        count: 0,
        bonus: 15728.64
    },
    methods: {
        rand(){
            this.test = getRandomInt(1, 65536)
            this.count++
        }
    }

})

var app9 = new Vue({
    el: '#app-9',
    data: {
        test: 'test',
        count: 0,
        bonus: 36818,
        bonus_count: 0
    },
    methods: {
        rand(){
            this.test = getRandomInt(1, 65536)
            this.count++
            if(this.bonus >= this.test){
                this.bonus_count++
            }
        },
        reset(){
            this.count = 0;
            this.bonus_count = 0;
        }
    }

})

function getRandomInt(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}
