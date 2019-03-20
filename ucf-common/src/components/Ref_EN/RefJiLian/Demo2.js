/**
 *
 * @title ref-tree 参照_en-树形_en
 * @description 具有单选多选的树形参照_en
 *
 */

import React, { Component } from 'react';
import { RefTreeWithInput }  from 'pap-refer/dist/index.js';
import "pap-refer/dist/index.css"
// import { Button, Panel } from 'tinper-bee';
// import Form from 'bee-form';
import {Button,Form} from 'tinper-bee';
import Card from '../Card'
let code =
  `
<div className="demo-label">
  <span >多选（组织）：_en</span>
  <RefTreeWithInput
    title={'组织_en'}
    param={{
      "refCode": "neworganizition_tree"
    }}
    refModelUrl={{
      treeUrl: '/pap_basedoc/common-ref/blobRefTree',
    }}
    matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
    filterUrl='/pap_basedoc/common-ref/filterRefJSON'
    multiple={true}
    searchable={true}
    checkStrictly={true}
    strictMode={true}
    displayField='{refname}'
    valueField='refpk'
    lang={this.props.lang}
    {...getFieldProps('code', {
      initialValue: '{"refname":"","refpk":""}',
      rules: [{
        message: '提示：请选择组织_en',
        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
      }]
    })}
    onSave={this.multiSave}
  />
  <span style={{
    color: 'red'
  }}>
    {
      getFieldError('code')
    }
  </span>
</div>
<div className="demo-label">
  <span >级联（部门）：_en</span>
  <RefTreeWithInput
    title={'部门_en'}
    refModelUrl={{
      treeUrl: '/pap_basedoc/common-ref/blobRefTree',
    }}
    matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
    filterUrl='/pap_basedoc/common-ref/filterRefJSON'
    multiple={true}
    searchable={true}
    checkStrictly={true}
    strictMode={true}
    displayField='{refname}'
    valueField='refpk'
    param={{
      "refCode": "newdeptUnderOrg_treem",
      "clientParam": Object.keys(multiClientParam).length === 0 ? '' : multiClientParam
    }}
    lang={this.props.lang}
    {...getFieldProps('code1', {
      initialValue: '{"refname":"","refpk":""}',
      rules: [{
        message: '提示：请选择部门_en',
        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
      }]
    })}

  />

  <span style={{
    color: 'red'
  }}>
    {
      getFieldError('code1')
    }
  </span>
</div>

`
class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      multiClientParam: {},
    }

  }

  multiSave = (result) => {
    let arr = [];
    result.forEach(item => {
      item && arr.push(item.refpk);
    })
    this.setState({
      multiClientParam: arr.length === 0 ? {} : { 'organization_id': arr.toString() }
    })

  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    let { multiClientParam } = this.state;
    const clientParam = { "isUseDataPower": "true" };
    multiClientParam = Object.assign({}, clientParam, multiClientParam)
    return (
      <Card
        title="多选级联参照：组织_en-部门_en"
        codeText={code}
        footer={
          <Button colors="primary"
            style={{
              margin: 'auto 5px',
              height: '30px',
              padding: '0px'
            }}
            onClick={() => {
              this.props.form.validateFields((err, values) => {
                if (err) return;
                alert(`您选择的是_en${JSON.stringify(values)}`)
              });
            }}
          >
            提交_en
          </Button>
        }
      >
        <div className="demo-label">
          <span >多选（组织）：_en</span>
          <RefTreeWithInput
            title={'组织_en'}
            param={{
              "refCode": "neworganizition_tree"
            }}
            refModelUrl={{
              treeUrl: '/pap_basedoc/common-ref/blobRefTree',
            }}
            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            lang={this.props.lang}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择组织_en',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            onSave={this.multiSave}
          />
          <span style={{
            color: 'red'
          }}>
            {
              getFieldError('code')
            }
          </span>
        </div>
        <div className="demo-label">
          <span >级联（部门）：_en</span>
          <RefTreeWithInput
            title={'部门_en'}
            refModelUrl={{
              treeUrl: '/pap_basedoc/common-ref/blobRefTree',
            }}
            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            param={{
              "refCode": "newdeptUnderOrg_treem",
              "clientParam": Object.keys(multiClientParam).length === 0 ? '' : multiClientParam
            }}
            lang={this.props.lang}
            {...getFieldProps('code1', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择部门_en',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}

          />

          <span style={{
            color: 'red'
          }}>
            {
              getFieldError('code1')
            }
          </span>
        </div>
      </Card>
    )
  }
};

export default Form.createForm()(Demo1);
