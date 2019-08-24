import React from 'react';
import PictureSelect from './picture-select' // 图片选择组件
function App() {
  const pictures = [
    {
      id: '1',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
  ];
  const [value, setValue] = React.useState(['1']);
  
  console.log(value)
  return (
    <div className="App">
      <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)}/>
    </div>
  );
}

export default App;
