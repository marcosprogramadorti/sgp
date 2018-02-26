import { CanActivateChild } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";

@Injectable()
export class PacientesGuard implements CanActivateChild{
    
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) : Observable<boolean> | boolean {
        
        console.log('quarda de rota filha');
        return true;
    
      }

}