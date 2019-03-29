/**
 *
 * @title ref-tree 参照_tw-树形_tw
 * @description 具有单选多选的树形参照_tw
 *
 */

import React, { Component } from 'react';
import PapRefRole from 'pap-refer/lib/pap-ref-role';
import 'pap-refer/lib/pap-ref-role.css';
import PapRefPosition from 'pap-refer/lib/pap-ref-position';
import 'pap-refer/lib/pap-ref-position.css';
import { Button, Form } from 'tinper-bee';
import Card from '../Card'
let code =
`

import React, { Component } from 'react';
import PapRefRole from 'pap-refer/lib/pap-ref-role';
import 'pap-refer/lib/pap-ref-role.css';
import PapRefPosition from 'pap-refer/lib/pap-ref-position';
import 'pap-refer/lib/pap-ref-position.css';
import { Button, Form } from 'tinper-bee';
import Card from '../Card'
class Demo4 extends Component {
	constructor() {
		super();
		this.state = {
			value: ''
		}

	}
	render() {

		const { getFieldProps, getFieldError } = this.props.form;
		return (
			<Card
				title="业务示例_tw"
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
								alert("您选择的是_tw"+JSON.stringify(values))
							});
						}}
					>
						提交_tw
                            </Button>
				}
			>
				<div className="demo-label">
					<span >角色_tw</span>
					<PapRefRole
						multiple={false}
						searchable={true}
						checkStrictly={true}
						strictMode={true}
						displayField='{refname}'
						valueField='refpk'
						lang={this.props.lang}
						{...getFieldProps('code', {
							initialValue: '{"refname":"","refpk":""}',
							rules: [{
								message: '提示：请选择_tw',
								pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
							}]
						})}
						emptyBut={true}

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
					<span >岗位_tw</span>
					<PapRefPosition 
						multiple={false}
						searchable={true}
						checkStrictly={true}
						strictMode={true}
						displayField='{refname}'
						valueField='refpk'
						lang={this.props.lang}
						emptyBut={true}

						{...getFieldProps('code1', {
							initialValue: '{"refname":"","refpk":""}',
							rules: [{
								message: '提示：请选择_tw',
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

`
class Demo4 extends Component {
	constructor() {
		super();
		this.state = {
			value: ''
		}

	}
	render() {

		const { getFieldProps, getFieldError } = this.props.form;
		return (
			<Card
				title="业务示例_tw"
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
								alert("您选择的是_tw"+JSON.stringify(values))
							});
						}}
					>
						提交_tw
                            </Button>
				}
			>
				<div className="demo-label">
					<span >角色_tw</span>
					<PapRefRole
						multiple={false}
						searchable={true}
						checkStrictly={true}
						strictMode={true}
						displayField='{refname}'
						valueField='refpk'
						lang={this.props.lang}
						{...getFieldProps('code', {
							initialValue: '{"refname":"","refpk":""}',
							rules: [{
								message: '提示：请选择_tw',
								pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
							}]
						})}
						emptyBut={true}

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
					<span >岗位_tw</span>
					<PapRefPosition 
						multiple={false}
						searchable={true}
						checkStrictly={true}
						strictMode={true}
						displayField='{refname}'
						valueField='refpk'
						lang={this.props.lang}
						emptyBut={true}

						{...getFieldProps('code1', {
							initialValue: '{"refname":"","refpk":""}',
							rules: [{
								message: '提示：请选择_tw',
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

export default Form.createForm()(Demo4);

