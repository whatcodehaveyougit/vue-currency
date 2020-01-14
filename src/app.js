import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      selectedCurrency: null,
      amountToConvert: null,
      amountToConvertToEuro: null,
      total: null,
      selectToEuroTotal: null
    },
    mounted(){
      this.getCurrencies()
    },
    methods: {
      getCurrencies: function() {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(currencies => this.currencies = currencies.rates)
      }, calculate: function() {
        this.total = this.amountToConvert * this.selectedCurrency;
      }, calculateToEuro: function() {
          this.selectToEuroTotal = this.amountToConvert * this.selectedCurrency;
        }
    }
  });
});
