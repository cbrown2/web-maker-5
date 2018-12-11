import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from 'src/app/services/widget.service.client';
import { Widget } from 'src/app/models/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  wgid: string;
  widget: Widget;


  constructor(
    private ActivatedRoute: ActivatedRoute, 
    private widgetService: WidgetService
  ) { }

  ngOnInit() { //subscribes give and observable array
    this.ActivatedRoute.params.subscribe(
      (params)=>{
       this.wgid = params["wgid"]  
       //click on item then hit f12 to find where to define it
       this.widgetService.findWidgetById(this.wgid).subscribe(
         (widget: Widget) => {
           this.widget = widget;
         });
       }
    );

  }

}