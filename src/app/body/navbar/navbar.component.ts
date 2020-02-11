import { Component, ViewChild , OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  classNavbar: Boolean;

  /* Selector para obtener el elemento */
  @ViewChild('navbar', { static: false }) navbar: ElementRef;

//  @HostListener('window:scroll', []) onWindowScroll() {
//    if (window.pageYOffset > 100) {
//      console.log("aaaaa");
//        //this.navbar.nativeElement.classList.add('navbar-scrolled');
//    } else {//
//      console.log("bbbb");
//      //this.navbar.nativeElement.classList.remove('navbar-scrolled');
//    }
//}

/* Permite escuchar el elemento scroll en pantalla */
@HostListener('window:scroll', ['$event'])
  onScroll(){

  /* Elementos a utilizar */
  let body = document.body.scrollTop;
  let documentElement = document.documentElement.scrollTop;
  let heightNavbar = this.navbar.nativeElement.offsetHeight;

  if (body > heightNavbar || documentElement > heightNavbar){
    this.classNavbar = false;
  }else{
    this.classNavbar = true;
  }
  console.log(this.classNavbar);
}


  constructor() { }

  ngOnInit() {
  }

}
