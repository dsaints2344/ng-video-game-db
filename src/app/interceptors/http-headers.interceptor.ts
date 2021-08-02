import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'fc19cd5419msh590313317423469p172f7bjsncf2e78768662',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: 'a5f01053b18e4ff5ab6d27f811f2540c',
            }
        });
        return next.handle(req);
    }
}
