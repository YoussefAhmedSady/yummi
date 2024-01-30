import { nav } from "./Nav.js";
import { meals } from "./meals.js";
import { ui } from "./ui.js";


export class area{
    constructor(){
        $('#areaLink').click((e)=> { 
            $('#mealPage').addClass('d-none')
            $('#detailesPage').addClass('d-none')
            $('#CategoriesPage').addClass('d-none')
            $('#areaPage').removeClass('d-none')
            $('#searchPage').addClass('d-none')
            $('#ingridiantsPage').addClass('d-none')
            $('.item5').removeClass('d-none')
            this.nav.closeNav()
            this.getArea()
            
        });
        this.nav=new nav()
        this.ui=new ui ()
        this.meals=new meals()
    }
    async getArea(){
        const areaApi=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        const respones=await areaApi.json()
        console.log(respones);
        this.ui.displayArea(respones.meals)
        this.getAreaId()
    }
    getAreaId(){
        $('.item5').addClass('d-none')
        document.querySelectorAll('.cards').forEach(card => {
            card.addEventListener('click',()=>{
                const cardId=card.dataset.id
                this.getAreaMeal(cardId)
                $('.item5').removeClass('d-none')
            })
        });
    }
    async   getAreaMeal(arr){
const areaMeal=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${arr}`)
const respones=await areaMeal.json()
$('.item5').removeClass('d-none')
console.log(respones.meals);
this.ui.displayMeals(respones.meals.slice(0,20))
this.meals.getMealId()
    }
}