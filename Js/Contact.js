import { nav } from "./Nav.js"
import { ui } from "./ui.js"
let nameRegex=/^[a-zA-Z  ]+$/
let emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let phoneRegex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
let ageRegex=/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
let passwordRegex=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
export class contact{
    constructor(){
        $('#contactLink').click((e)=> { 
            $('#mealPage').addClass('d-none')
            $('#detailesPage').addClass('d-none')
            $('#CategoriesPage').addClass('d-none')
            $('#areaPage').addClass('d-none')
            $('#searchPage').addClass('d-none')
            $('#ingridiantsPage').addClass('d-none')
            this.nav.closeNav()
            this.ui.displayContact()
            document.querySelector('#nameInput').addEventListener('input',(e)=>{ 
            this.vlidationName()
            if(this.vlidationName()){
                $('#nameAlart').addClass('d-none')
            }else{
                $('#nameAlart').removeClass('d-none')
            }
            this.validationInputs( )
            })
            document.querySelector('#emailInput').addEventListener('input',(e)=>{ 
                this.vlidationEmail()
                if(this.vlidationEmail()){
                    $('#emailAlart').addClass('d-none')
                }else{
                    $('#emailAlart').removeClass('d-none')
                }
                this.validationInputs( )
                })
                document.querySelector('#phoneInput').addEventListener('input',(e)=>{ 
                    this.vlidationPhone()
                    if(this.vlidationPhone()){
                        $('#phoneAlart').addClass('d-none')
                    }else{
                        $('#phoneAlart').removeClass('d-none')
                    }
                    this.validationInputs( )
                    })
                    document.querySelector('#ageInput').addEventListener('input',(e)=>{ 
                       this.vlidationAge()
                       if(this.vlidationAge()){
                        $('#ageAlart').addClass('d-none')
                    }else{
                        $('#ageAlart').removeClass('d-none')
                    }
                        this.validationInputs( )
                        })
                        document.querySelector('#passwordInput').addEventListener('input',(e)=>{ 
                            this.vlidationPassword()
                            if(this.vlidationPassword()){
                                $('#passwordAlart').addClass('d-none')
                            }else{
                                $('#passwordAlart').removeClass('d-none')
                            }
                            this.validationInputs( )
                            })
                            document.querySelector('#repasswordInput').addEventListener('input',(e)=>{ 
                                this.vlidationRePassword()
                                if(this.vlidationRePassword()){
                                    $('#repasswordAlart').addClass('d-none')
                                }else{
                                    $('#repasswordAlart').removeClass('d-none')
                                }
                                this.validationInputs( )
                                })
          
        })
        this.nav=new nav()
        this.ui=new ui()
        

        }
       
        vlidationName(){
            return nameRegex.test(document.querySelector('#nameInput').value)
        }
        vlidationEmail(){
            return emailRegex.test(document.querySelector('#emailInput').value)
        }
        vlidationPhone(){
            return phoneRegex.test(document.querySelector('#phoneInput').value)
        }
        vlidationAge(){
            return ageRegex.test(document.querySelector('#ageInput').value)
        }
        vlidationPassword(){
            return passwordRegex.test(document.querySelector('#passwordInput').value)
        }
        vlidationRePassword(){
            return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
        }
        validationInputs(){
            if(this.vlidationName()&&this.vlidationEmail()&&this.vlidationPhone()
            &&this.vlidationAge()&&this.vlidationPassword()&&this.vlidationRePassword()){
                $('#btnsubmit').removeClass('disabled')
            }else{
                $('#btnsubmit').addClass('disabled')
            }
        }
}
