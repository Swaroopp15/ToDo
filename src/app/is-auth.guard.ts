import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const isAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    if (localStorage.getItem('user_id') !== null) {
      return true
    }
    else {
      return false
    }

};
