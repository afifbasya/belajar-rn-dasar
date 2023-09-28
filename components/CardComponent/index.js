import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Tombol from '../Tombol';

// Konsep Lifecycle 
// 1. Ketika Component dipasang (Mounting)
// 2. Ketika Ada Perubahan State (Did Update)
// 3. Ketika Component itu dicopot (Unmount)

export default class CardComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tampil: false
        }
    }

    // 1. Ketika Component dipasang (Mounting)
    componentDidMount() {
        console.log("Component Dipasang");
    }

    // 2. Ketika Ada Perubahan State (Did Update)
    componentDidUpdate(prevProps, prevState) {
        if (prevState.tampil !== this.state.tampil) {
            console.log("Component Did Update");
        }
    }

    // 3. Ketika Component itu dicopot (Unmount)
    componentWillUnmount() {
        console.log("Component Dicopot");
    }

    render() {
        return (
            <View>
                <Text>Card : {this.state.tampil ? "Tampil" : "Tidak Tampil"}</Text>
                <Tombol
                    title="Ganti Nama"
                    handleSubmit={() => this.setState({ tampil: !this.state.tampil })}
                />
            </View>
        )
    }
}