import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';
import { MainAdminPanelComponent } from './Main/Main.component';

export const AdminPanelRoutes : Routes = [
   {
      path : 'admin-panel',
      redirectTo: 'admin-panel/reports',
      pathMatch: 'full',
   }, 
   {
      path : "admin-panel",
      component : MainAdminPanelComponent,
      children: [ 
         {
            path: 'reports',
            loadChildren: './Reports/Reports.module#ReportsModule'
         },
         {
            path: 'invoices',
            loadChildren: './Invoices/Invoices.module#InvoicesModule'
         },
         {
            path: '',
            loadChildren: './Products/Products.module#ProductsModule'
         },
         {
            path: 'account',
            loadChildren: './AdminAccount/AdminAccount.module#AdminAccountModule'
         }
      ]
   }
]
