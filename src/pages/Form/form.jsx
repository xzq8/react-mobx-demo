import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { createForm } from 'rc-form';
import { List, InputItem, Picker } from 'antd-mobile';
import QueueAnim from 'rc-queue-anim';
@inject('store')
@observer class From extends Component {
    componentDidMount() {
    }
    onClick = () => {
        this.props.form.validateFields((error, value) => {
            // console.log(error, value);
            if (error) {
                console.log('error', error, "values:", value);
            }
        });
        // console.log(this.props.form.getFieldsValue());
    }
    district = [
        { value: "请选择客户经理", label: 0 },
        { value: "请选择客户经理1", label: 1 },
        { value: "请选择客户经理2", label: 2 }

    ]
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        const { store } = this.props;
        let district = this.district
        let errors;
        return (<QueueAnim type="bottom"
        >
            <List renderHeader={() => 'Format'} key="form1">
                <InputItem
                    {...getFieldProps('name', {
                        rules: [
                            {
                                required: true,
                                messages: "输入正确的姓名"
                            }, {
                                validator: (rules, callback) => {
                                    callback()
                                }
                            }]
                    })}
                    type="bankCard"
                >姓名</InputItem>
                <InputItem
                    {...getFieldProps('phone')}
                    type="phone"
                    placeholder="186 1234 1234"
                >手机号码</InputItem>
                <InputItem
                    {...getFieldProps('ids')}
                    type="number"
                    placeholder="****"
                >身份证号码</InputItem>
                <InputItem
                    {...getFieldProps('verificationCode')}
                    type="number"
                    placeholder="click to show number keyboard"
                    extra={<button onClick={this.onClick}>获取验证码</button>}
                >验证码</InputItem>
                <Picker data={district} cols={1} {...getFieldProps('kehujingli')} extra="请选择客户经理" className="forss">
                    <List.Item arrow="down">Single</List.Item>
                </Picker>
                {/* <Picker data={district} cols={1} {...getFieldProps('district3')} className="forss">
                    <List.Item arrow="horizontal">Single</List.Item>
                </Picker> */}
                {(errors = getFieldError()) ? errors.join(',') : null}
                <button onClick={this.onClick}>submit</button>
            </List>
        </QueueAnim>
        )
    }
}
const FromObj = createForm()(From);
export default FromObj;