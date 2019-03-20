/**
 *
 * @title ref-tree 参照_tw-树形_tw
 * @description 具有单选多选的树形参照_tw
 *
 */

import React, { Component } from 'react';

import { RefTreeTransferWithInput }  from 'pap-refer/dist/index.js';
import "pap-refer/dist/index.css"
import {Button,Form,Panel} from 'tinper-bee';
import Card from '../Card'
let code = 
`
<div className="demo-label">
        <span >穿梭框：：_tw</span>
        <RefTreeTransferWithInput
            title = '组织部门人员穿梭_tw'
            textOption= {{
                leftTitle:'组织部门树_tw',
                    rightTitle:'人员穿梭框_tw'
            }}
            param = {{//url请求参数
                refCode:'neworgdeptstaff_treegrid',
            }}
            refModelUrl = {{
                treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',
                tableBodyUrlSearch: ''
            }}
            displayField='{refname}-{refcode}'
            valueField='refcode'
            lang={this.props.lang}
            {...getFieldProps('code', {
                initialValue: '{"refname":"","refpk":""}',
                rules: [{
                    message: '提示：请选择_tw',
                    pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                }]
            })}
            emptyBut={false}
        />
        <span style={{
            color: 'red'
        }}>
            {
                getFieldError('code')
            }
        </span>
</div>
                    
`
class Demo1 extends Component {
    constructor() {
        super();
        this.state = {
            value:''
        }

    }
    render() {
        
        const { getFieldProps, getFieldError } = this.props.form;
        return (
                    <Card
                        title="基础示例_tw"
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
                                        if(err) return;
                                        alert(`您选择的是_tw${JSON.stringify(values)}`)
                                    });
                                }}
                            >
                                提交_tw
                            </Button>
                        }
                    >
                        <div className="demo-label">
                            <span >穿梭框：：_tw</span>
                            <RefTreeTransferWithInput
                                title = '组织部门人员穿梭_tw'
                                textOption= {{
                                    leftTitle:'组织部门树_tw',
                                        rightTitle:'人员穿梭框_tw'
                                }}
                                param = {{//url请求参数
                                    refCode:'neworgdeptstaff_treegrid',
                                }}
                                refModelUrl = {{
                                    treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                                    tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',
                                    tableBodyUrlSearch: ''
                                }}
                                displayField='{refname}-{refcode}'
                                valueField='refcode'
                                lang={this.props.lang}
                                {...getFieldProps('code', {
                                    initialValue: '{"refname":"","refpk":""}',
                                    rules: [{
                                        message: '提示：请选择_tw',
                                        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                                    }]
                                })}
                                emptyBut={false}
                            />
                            <span style={{
                                color: 'red'
                            }}>
                                {
                                    getFieldError('code')
                                }
                            </span>
                        </div>
                    </Card>
        )
    }
};

export default Form.createForm()(Demo1);


