import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <nav
      class="navbar navbar-dark navbar-expand text-light"
      style="background-color: #001010;"
    >
      <a class="navbar-brand" href="#">
        <img
          src="assets/img/floweroflife.jpg"
          width="50"
          height="50"
          alt=""
          loading="lazy"
        />
        <span class="ml-2">Task Manager</span>
      </a>
    </nav>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
