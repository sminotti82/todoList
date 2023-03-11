const app = new Vue({
  el:'#root',
  data:{
          lista:['studiare React','scrivere codice','portare a spasso oliver'],
          newItem :'',
          risultato :'',
  },

  methods:{

     aggiungi:function(){
          !this.lista.includes(this.newItem)?this.lista.push(this.newItem):alert('questa faccenda è gia segnata in agenda! Aggiungi altro')
          this.newItem=''
     },
     elimina:function(index){

            this.lista.splice(index,1)
            this.risultato=`<b>NON HAI FATTO QUESTA FACCENDA`
            setTimeout(() => {
                 this.risultato=''
            }, 2000);

            
     }
  }
   



})