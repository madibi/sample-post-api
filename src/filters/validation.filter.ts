import {ArgumentsHost, Catch, ExceptionFilter, HttpStatus} from '@nestjs/common';
import {ValidationException} from './validation.exception';
import { Response } from './../schema/common/models/classes/response.class';

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {

    catch(exception: ValidationException, host: ArgumentsHost): any {

        let response = new Response<null>();
        const ctx = host.switchToHttp();
        const ctxResponse = ctx.getResponse();

        response.header.methodInfo = {
            status: false,
            message: exception.validationErrors.join(', ')
        };

        return ctxResponse
            .status(HttpStatus.BAD_REQUEST)
            .json(response.Get());        

    }

}
