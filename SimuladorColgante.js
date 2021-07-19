const app=new Vue({
    el: '#app',
    data: {
        contador:16,
        texto:'Holaaaa',
        imagen:'https://lamparasamedida.com/wp-content/uploads/2021/06/Ejemplo-marron-blanco-2.jpg',
        link:'https://getbootstrap.com/docs/5.0/content/images/',
        centinela:'bombillas',
        urlBombillas:'https://lamparasamedida.com/wp-content/uploads/2020/01/bombilla-led-globo-vintage-e-27-8w-g95-300x343-2.png',
        bombillas:[
            {link:'https://lamparasamedida.com/lamparas-a-medida/bombillas-decorativas/filamento-led-vintage/bombilla-globo-vintage-de-filamento-led-8w-2200k/',alt:'cable de color plata de simula tu colgante',
                url:'https://lamparasamedida.com/wp-content/uploads/2020/01/bombilla-led-globo-vintage-e-27-8w-g95-300x343-1.jpg',
                urlEjemplo:'https://lamparasamedida.com/wp-content/uploads/2020/01/bombilla-led-globo-vintage-e-27-8w-g95-300x343-2.png'},
            {link:'https://lamparasamedida.com/lamparas-a-medida/bombillas-decorativas/filamento-led-vintage/bombilla-edison/',alt:'Bombilla de filamento Edison 4W Golden Curve',
                url:'https://lamparasamedida.com/wp-content/uploads/2019/02/comprar-bombilla-led-edison-2-600x600.jpg',
                urlEjemplo:'https://lamparasamedida.com/wp-content/uploads/2021/02/edison-4W-golden-curve-1.png'},
            {link:'https://lamparasamedida.com/lamparas-a-medida/bombillas-decorativas/filamento-led-vintage/bombilla-edison-2-5w-ambar-e-27/',alt:'Bombilla filamento vintage de Edison 2.5W',
                url:'https://lamparasamedida.com/wp-content/uploads/2019/02/IMG_20190705_111025-scaled-1.jpg',
                urlEjemplo:'https://lamparasamedida.com/wp-content/uploads/2021/02/bombilla-edison-2.5W.png'},
            {link:'https://lamparasamedida.com/lamparas-a-medida/bombillas-decorativas/filamento-led-vintage/bombilla-estandar-de-filamento-led-8w-3000k/',alt:'Bombilla de filemento led 8W',
                 url:'https://lamparasamedida.com/wp-content/uploads/2021/02/Estandar-LED-Rustica-DIM-340-300x275-1.jpg',
                 urlEjemplo:'https://lamparasamedida.com/wp-content/uploads/2021/02/bombilla-edison-8W-trans.png'},
            {link:'https://lamparasamedida.com/lamparas-a-medida/bombillas-decorativas/filamento-led-vintage/bombilla-globo-vintage-de-filamento-led-6-5w-2200k-ambar-g125/',alt:'Bombilla filamento led ambar 6.5W G125 2200K',
                url:'https://lamparasamedida.com/wp-content/uploads/2020/01/bombilla-led-6w-e27-g95-ambar-mantra.jpg',
                urlEjemplo:'https://lamparasamedida.com/wp-content/uploads/2021/02/bombilla-globo-125-6.5W.png'},
            {link:'https://lamparasamedida.com/lamparas-a-medida/bombillas-decorativas/filamento-led-vintage/bombilla-globo-golden-curve-dimable-4w-2200k/',alt:'Bombilla globo de filamento golden curve 4W G125',
                url:'https://lamparasamedida.com/wp-content/uploads/2021/02/IMG_20190705_124450-scaled-1.jpg',
                urlEjemplo:'https://lamparasamedida.com/wp-content/uploads/2021/02/bombilla-globo-125-4W-golden-curve.png'},
            {link:'https://lamparasamedida.com/lamparas-a-medida/bombillas-decorativas/filamento-led-vintage/st64-filamento-7w/',alt:'Bombilla filamento edison inteligente',
                url:'https://lamparasamedida.com/wp-content/uploads/2020/09/edisson-filament.jpg',
                urlEjemplo:'https://lamparasamedida.com/wp-content/uploads/2021/02/bombilla-filamento-smart.png'},
            {link:'https://lamparasamedida.com/lamparas-a-medida/bombillas-decorativas/filamento-led-vintage/bombilla-smart-filamento-ambar-7w/',alt:'Bombilla filamento edison inteligente 7W ambar',
                url:'https://lamparasamedida.com/wp-content/uploads/2020/09/edisson-filament-1.jpg',
                urlEjemplo:'https://lamparasamedida.com/wp-content/uploads/2021/02/bombilla-filamento-smart-ambar.png'},
                 
        ],
        florones:[
            
        ],
        cables:[],
        casquillos:[],
    },

    methods:{
        prueba(index){
            this.texto=this.bombillas[index].texto
            this.link=this.bombillas[index].link
            this.urlBombillas=this.bombillas[index].urlEjemplo
        },

        cambioFloron(){
            this.centinela='florones'
        },
        cambioCasquillo(){
            this.centinela='casquillos'
        },
        cambioBombillas(){
            this.centinela='bombillas'
        },
        cambioCables(){
            this.centinela='cables'
        }

    }
})