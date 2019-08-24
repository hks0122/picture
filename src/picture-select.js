import React from 'react';
class PictureSelect extends React.Component {
  render () {
    const { pictures, value , onChange } = this.props
    return (
      <div style={{marginTop: '100px'}}>
        <input type="checkbox" checked='true'/><span>已选中{value.length}个文件</span>
        <div style={{marginTop: '10px'}}>
          {pictures.map((v, i) => 
          <span style={{position: 'relative'}}>
            <input 
              name='pic'
              value={v.id}
              style={{position: 'absolute'}}
              checked={value.indexOf(v.id) > -1}
              type="checkbox"
              onClick={() => {
                var newArr=[]
                var sel = document.getElementsByName('pic')
                sel.forEach((el) => {
                  if (el.checked) {
                    newArr.push(el.value)
                  }
                })
                onChange(newArr)
              }}
            />
            <img src={v.url}/>
          </span>
          )}
        </div>
      </div>
    );
  }
}
export default PictureSelect
