import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe('Calculator Service', () => {

    let calculator: CalculatorService,
        loggerSpy: any;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
        
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                { provide: LoggerService, useValue: loggerSpy}
            ]
        });
        
        calculator = new CalculatorService(loggerSpy);


    })

    it('should add two numbers', () => {
        const result = calculator.add(1,2);
        expect(result).toBe(3);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    
    it('should subtract two numbers', () => {
        const result = calculator.subtract(1,2);
        expect(result).toBe(-1);
    });

});