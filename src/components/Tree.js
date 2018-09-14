
import React, { Component } from 'react';
import treeData from '../data/tree.json';

class Tree extends Component {
    state = {
      // treeData = []
    }
    //method to get JSON into state

  getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
    (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
    console.log(getNestedObject)
    // const getNestedObject(treeData, ['action', 0, 'type', 0]);
    }


  // getNestedObject(treeData['action', 0, 'type', 0]);


    render() {
      return (
        <div
          className="tree-component"
          // data={() => this.getNestedObject()}
          > Hello
          {/* {console.log(getNestedObject)} */}
          {/* {treeData.map((treeDetail, i) => {
            return (
              <h1
                className={"whatever"}
                key={i}
              >
                {[treeDetail.action[0],
                <b
                  className="other"
                  key={i}
                  >
                    {treeDetail.type}
                    </b>,
                  treeDetail.data
                ]}
              </h1>
            )
          })} */}

        </div>
    )
  }

};

export default Tree;
