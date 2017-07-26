import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';


var mobileMenu = new MobileMenu();

//var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"),'85%');
new RevealOnScroll($(".testimonials"),'60%');

var stickyHeader = new StickyHeader();


var modal = new Modal();



/*var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';
//alert('Alerta Gulp Scripts');
class Adult extends Person
{
    payTaxes()
    {
        console.log(this.name + " you own $0 in taxes");
    }
}
var juan = new Person("juan","verde");
juan.greet();
var maria = new Adult("maria","azul");
maria.greet();
maria.payTaxes();
$("h1").remove();*/