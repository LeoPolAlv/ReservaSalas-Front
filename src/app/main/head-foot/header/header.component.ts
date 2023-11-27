import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuItemService } from 'src/app/services/menu-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  items: MenuItem[] | undefined;

  constructor(
    private menuItemService: MenuItemService,
  ) {

  }

  ngOnInit(): void {
    //this.items = [
        /*{
            "label": "File",
            "icono": "pi pi-fw pi-file",
            "routerLink": null,
            "items": [
                {
                    "label": "File",
                    "icono": "pi pi-fw pi-file21",
                    "routerLink": null,
                    "items": [
                        {
                            "label": "File",
                            "icono": "pi pi-fw pi-file42",
                            "routerLink": null,
                            "items": []
                        },
                        {
                            "label": "File",
                            "icono": "pi pi-fw pi-file52",
                            "routerLink": null,
                            "items": [
                                {
                                    "label": "File",
                                    "icono": "pi pi-fw pi-file65",
                                    "routerLink": null,
                                    //"items": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "File",
                    "icono": "pi pi-fw pi-file31",
                    "routerLink": null,
                    "items": [
                        {
                            "label": "File",
                            "icono": "pi pi-fw pi-file73",
                            "routerLink": null,
                            "items": [
                                {
                                    "label": "File",
                                    "icono": "pi pi-fw pi-file97",
                                    "routerLink": null,
                                    "items": null
                                },
                                {
                                    "label": "File",
                                    "icono": "pi pi-fw pi-file107",
                                    "routerLink": null,
                                    "items": null
                                }
                            ]
                        },
                        {
                            "label": "File",
                            "icono": "pi pi-fw pi-file83",
                            "routerLink": null,
                            "items": []
                        }
                    ]
                }
            ]
        },
        {
            "label": "Edit",
            "icono": "pi pi-fw pi-pencil",
            "routerLink": null,
            "items": [
                {
                    "label": "Edit",
                    "icono": "pi pi-fw pi-pencil1211",
                    "routerLink": null,
                    "items": []
                }
            ]
        }*/
    //]
      
        this.menuItemService.obtenermenu().subscribe( datos => {
            //console.log("Items del Menu: " , datos);
            this.items = datos;
        });
       
  }


}
