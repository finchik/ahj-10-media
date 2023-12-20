import Popup from '../Popup';

test('метод checkPopupInput должен вернуть true', () => {
  expect(Popup.checkPopupInput('[1.11111, 2.22222]')).toBeTruthy();
  expect(Popup.checkPopupInput('[11.11111, 22.22222]')).toBeTruthy();
  expect(Popup.checkPopupInput('[1.11111,2.22222]')).toBeTruthy();
  expect(Popup.checkPopupInput('1.11111, 2.22222')).toBeTruthy();
  expect(Popup.checkPopupInput('11.11111, -2.22222')).toBeTruthy();
  expect(Popup.checkPopupInput('1, 2')).toBeTruthy();
  expect(Popup.checkPopupInput('1,2')).toBeTruthy();
});

test('метод checkPopupInput должен вернуть false', () => {
  expect(Popup.checkPopupInput('[111.11111, 2.22222]')).toBeFalsy();
  expect(Popup.checkPopupInput('[11.11111 2.22222]')).toBeFalsy();
});

test('метод formatingPopupInput должен вернуть объект с координатами', () => {
  const received = {
    latitude: 1.11111,
    longitude: 2.22222,
  };
  expect(Popup.formatingPopupInput('[1.11111, 2.22222]')).toEqual(received);
  expect(Popup.formatingPopupInput('1.11111, 2.22222')).toEqual(received);
  expect(Popup.formatingPopupInput('1.11111,2.22222')).toEqual(received);
});
