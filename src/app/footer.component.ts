import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p>
      footer works!
    </p>
    <footer class="page-footer font-small blue fixed-bottom">
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#"> Naresh Routhu</a>
  </div>
  </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}