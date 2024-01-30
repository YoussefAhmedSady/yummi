import { nav } from "./Nav.js"
import { details } from "./details.js"
import { meals } from "./meals.js"
import { ui } from "./ui.js"
let regex=/^[A-z]$/;
let searchByName=document.getElementById('searchByNameInput')
let searchByLetter=document.getElementById('searchByLetterInput')

export class search{
    constructor(){

        $('#searchLink').click( (e)=> { 
            $('#mealPage').addClass('d-none')
            $('#detailesPage').addClass('d-none')
            $('#CategoriesPage').addClass('d-none')
            $('#areaPage').addClass('d-none')
            $('#searchPage').removeClass('d-none')
            $('#ingridiantsPage').addClass('d-none')
            this.getSearchTerm()
            this.nav.closeNav()
        });
        this.ui=new ui()
        this.meals=new meals()
        this.details=new details()
        this.nav=new nav()
    }
    getSearchTerm(){
        searchByName.addEventListener('input',(e)=>{
           if(e.target.value==''){

           }else{
            this.getsearchApi(e.target.value)
            $('.item5').removeClass('d-none')
           }
        })
        searchByLetter.addEventListener('input',(e)=>{
            if(regex.test(e.target.value)){
                $('.item5').removeClass('d-none')
                this.getsearchByLetter(e.target.value)
                $('#alart2').addClass('d-none')
            }else if(e.target.value==''){
                $('#mealPage').addClass('d-none')
            }
            else{
                $('#alart2').removeClass('d-none');
                $('#mealPage').addClass('d-none')
            }
        })
    }
    async  getsearchApi(searchTerm){
    if(searchTerm==''){
        

    }else{
        const searchApi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    const respones=await searchApi.json()
    if(respones.meals==null){
    $('#mealPage').addClass('d-none')
    $('#alart1').removeClass('d-none')
    $('.item5').addClass('d-none')
    }
    else{
        $('#mealPage').removeClass('d-none')
        this.ui.displayMeals(respones.meals.slice(0,20))
        this.meals.getMealId()
        $('#alart1').addClass('d-none')
    }
    }
}
async getsearchByLetter(searchTerm){
    if(searchTerm==''){
        $('#mealPage').addClass('d-none')
    }else{
        const searchApi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`)
    const respones=await searchApi.json()
    if(respones.meals==null){
    $('#mealPage').addClass('d-none')
    $('#alart1').removeClass('d-none')
    $('.item5').addClass('d-none')
    }
    else{ 
        
        this.ui.displayMeals(respones.meals.slice(0,20))
        this.meals.getMealId()
        $('#alart1').addClass('d-none')
        $('#mealPage').removeClass('d-none')
        
    }
}
}}