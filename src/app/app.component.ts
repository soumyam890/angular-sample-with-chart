import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sample-with-chart';

  selectedNodes: TreeNode[] | undefined;
  chips: string[] = ['Chip 1', 'Chip 2', 'Chip 3'];

  data: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      data: {
        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        title: 'CEO',
        mood: 'happy',
        features: [{ 'name': 'burnouts', 'value': 'High' },
        { 'name': 'WLB', 'value': 'Low' },
        { 'name': 'Flight Risk', 'value': 'High' },
        { 'name': 'Utilization', 'value': 'Low' }]
      },
      children: [
        {
          expanded: true,
          type: 'person',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            title: 'CMO',
            mood: 'sad',
            features: [{ 'name': 'burnouts', 'value': 'High' },
            { 'name': 'WLB', 'value': 'High' },
            { 'name': 'Flight Risk', 'value': 'High' },
            { 'name': 'Utilization', 'value': 'High' }]
          }
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            title: 'CTO',
            mood: 'neutral',
            features: [{ 'name': 'burnouts', 'value': 'Low' },
            { 'name': 'WLB', 'value': 'High' },
            { 'name': 'Flight Risk', 'value': 'Low' },
            { 'name': 'Utilization', 'value': 'High' }]
          }
        }
      ]
    }
  ];
}
