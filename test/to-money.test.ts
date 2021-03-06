import toMoney from '../src/to-money';

const testData= [
  ['0', '人民币零元整'],
  ['00', '人民币零元整'],
  ['000', '人民币零元整'],
  ['1', '人民币壹元整'],
  ['001', '人民币壹元整'],
  ['010', '人民币壹拾元整'],
  ['0010', '人民币壹拾元整'],
  ['12', '人民币壹拾贰元整',],
  ['3456789', '人民币叁佰肆拾伍万陆仟柒佰捌拾玖元整'],
  ['1001000021', '人民币壹拾亿零壹佰万零贰拾壹元整'],
  ['10000000000000000', '人民币壹万万亿元整'],
  ['100000001100000000', '人民币壹拾万万零壹拾壹亿元整']
];

describe('toMoney(转换阿拉伯数字为金额)', () => {
  it('整数', () => {
    testData.forEach(item => {
      expect(toMoney(item[0])).toEqual(item[1]);
    });
  });
});
