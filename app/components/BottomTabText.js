import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Switch } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors';

function BottomTabText(props) {
    return (
        <>
            <View style={{ marginTop: RFPercentage(4), width: '62%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                <TouchableOpacity activeOpacity={0.8} >
                    <Text style={{ color: Colors.black, fontWeight: '500', fontSize: RFPercentage(1.8) }} >
                        {`Terms&Conditions`}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} >
                    <Text style={{ color: Colors.black, fontWeight: '500', fontSize: RFPercentage(1.8) }}>
                        About
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} >
                    <Text style={{ color: Colors.black, fontWeight: '500', fontSize: RFPercentage(1.8) }}>
                        Privacy policy
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: RFPercentage(1.2), width: '25%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                <TouchableOpacity activeOpacity={0.8} >
                    <Text style={{ color: Colors.black, fontWeight: '500', fontSize: RFPercentage(1.8) }} >
                        Copyrights
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>

                    <Text style={{ color: Colors.black, fontWeight: '500', fontSize: RFPercentage(1.8) }}>
                        Help
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default BottomTabText;