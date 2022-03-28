import { MyController } from './controller';
import { MyService } from './service';

describe('MyController', () => {
  let controller: MyController = new MyController();

  describe('queryDataByid', () => {
    it('should return a response', async () => {
      const response = {
        id: 1,
        data: {},
      };
      MyService.prototype.query = jest.fn().mockReturnValue(response);
      const result = await controller.queryDataById('1');
      expect(result).toBeDefined();
      expect(result).toBe(response);
    });
  });
});
