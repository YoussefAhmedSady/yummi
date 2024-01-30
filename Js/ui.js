


export class ui {
    constructor(){
    }
    displayMeals(arr){
        // $('#searchPage').addClass('d-none')
        $('#detailesPage').addClass('d-none')
        $('#CategoriesPage').addClass('d-none')
        $('#areaPage').addClass('d-none')
        $('#ingridiantsPage').addClass('d-none')
        $('#mealPage').removeClass('d-none')
        let cartoona=``
        for (let i = 0; i < arr.length; i++) {
            cartoona+=`<div class="col-lg-3">
            <div class="cards position-relative overflow-hidden rounded-4" data-id="${arr[i].idMeal}" >
                <img src="${arr[i].strMealThumb}" alt="" class="w-100">
                <div class="overlay position-absolute d-flex align-items-center">
                    <h2 class="fs-1 ms-3">${arr[i].strMeal}</h2>
                </div>
            </div>
        </div>`
        }
        $('.meals').html(cartoona)
        $('.meals').removeClass('d-none')
        $('.item5').addClass('d-none')
    }
    displayDetails(arr){
        $('.item5').addClass('d-none')
    let ingredients = ``

    for (let i = 1; i <= 20; i++) {
        if (arr[`strIngredient${i}`]) {
            ingredients += `<li class="alert alert-info m-2 p-1">${arr[`strMeasure${i}`]} ${arr[`strIngredient${i}`]}</li>`
        }
    }

    let tags = arr.strTags?.split(",")
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }
        let cartoona=`<div class="col-lg-4">
        <div class="rounded-4"><img src="${arr.strMealThumb}" alt="" class="w-100"></div>
        <p class="fs-1 m-2">${arr.strMeal}</p>
    </div>
    <div class="col-lg-8">
        <h2>Instructions</h2>
        <p>${arr.strInstructions}</p>
        <ul class="m-0 p-0">
            <li class="fs-3 ">Area : <span>${arr.strArea}</span></li>
            <li class="fs-3 ">Category : <span>${arr.strCategory}</span></li>
            <li class="fs-3 ">Recipes :</li>
        </ul>
        <div id="Recipes" class="d-flex flex-wrap">
        ${ingredients}</div>
        <p class="fs-2">Tags:</p>
        <ul class="list-unstyled d-flex g-3 flex-wrap fs-3">
                    ${tagsStr}
                </ul>
        <button class="btn btn-success me-3"><a href="${arr.strSource}" target="_blank">Source</a></button><button class="btn btn-danger"><a href="${arr.strYoutube}" target="_blank">Youtube</a></button>
    </div>`
    $('#detailes').html(cartoona)
    }
    displayCategouries(arr){
        let cartoona=``
        for (let i = 0; i < arr.length; i++) {
            cartoona+=`<div class="col-lg-3">
            <div class="cards position-relative overflow-hidden rounded-4" data-id="${arr[i].strCategory}" >
                <img src="${arr[i].strCategoryThumb}" alt="" class="w-100">
                <div class="overlay position-absolute text-center p-3">
                    <h2 class="fs-1 mb-3">${arr[i].strCategory}</h2>
                    <p class="fs-5">${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
            </div>
        </div>`
        }
        $('#Categories').html(cartoona)

    }
    displayArea(arr){
        let cartoona=``
        for (let i = 0; i < arr.length; i++) {
            cartoona+=`<div class="col-lg-3">
            <div class="cards rounded-4 text-white text-center g-5" data-id="${arr[i].strArea}" >
            <div>
            <i class="fa-solid fa-house-laptop fa-6x"></i>
            <h2>${arr[i].strArea}</h2></div>
            </div>
        </div> `
        }
        $('#area').html(cartoona)

    }
    diplayingridiants(arr){
    let cartoona=``
    for (let i = 0; i <arr.length ; i++) {
        cartoona+=`  <div class="col-lg-3 text-white cards" data-id="${arr[i].strIngredient}">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
<h3>${arr[i].strIngredient}</h3>
<p>${arr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
    </div>`
        
    }
    $('#ingridiants').html(cartoona)
    }
displayContact(){
    let cartoona=`     <div class="row my-2">
    <div class="col-lg-6">
        <input type="text" placeholder="Enter your Name" id="nameInput" class="form-control">
        <div class="alert alert-warning d-none" id="nameAlart">Enter with no numbers and spical caractares</div>
    </div>
    <div class="col-lg-6">
        <input type="text" placeholder="Enter your Email" id="emailInput" class="form-control">
        <div class="alert alert-warning d-none" id="emailAlart" >Email not valid *exemple@yyy.zzz<</div>
    </div>
    
</div>
</div>
<div class="row my-2">
    <div class="col-lg-6">
        <input type="number" placeholder="Enter your Phone" id="phoneInput" class="form-control">
        <div class="alert alert-warning d-none" id="phoneAlart">  Enter valid Phone Number</div>
    </div>
    <div class="col-lg-6">
        <input type="number" placeholder="Enter your Age" id="ageInput" class="form-control">
        <div class="alert alert-warning d-none" id="ageAlart">Enter valid age</div>
    </div>
    
</div>
<div class="row my-2">
    <div class="col-lg-6">
        <input type="password" placeholder="Enter your Password" id="passwordInput" class="form-control">
        <div class="alert alert-warning d-none" id="passwordAlart"> Enter valid password *Minimum eight characters, at least one letter and one number:*</div>
    </div>
    <div class="col-lg-6">
        <input type="password" placeholder="Re-Password" id="repasswordInput" class="form-control">
        <div class="alert alert-warning d-none" id="repasswordAlart">Enter valid repassword</div>
    </div>
    
</div>
</div>
<div class="d-flex justify-content-center"><button class="btn btn-danger disabled" id="btnsubmit">Submit</button></div>`
$('#contact').html(cartoona)
}

}