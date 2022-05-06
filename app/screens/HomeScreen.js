import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Switch } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import ReactNativeCrossPicker from "react-native-cross-picker";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import Services from '../components/Services';
import BottomTabText from '../components/BottomTabText';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const data = [
        {
            icon1: 'pluscircleo',
            title1: 'Add new store',
            icon2: 'pluscircleo',
            title2: 'Custom orders'
        },
        {
            icon1: 'pluscircleo',
            title1: 'Add    product',
            icon2: 'printer',
            title2: 'Print QR-Codes'
        },

    ]

    const socialLinks = [
        {
            icon: 'facebook-square'
        },
        {
            icon: 'instagram'
        },
        {
            icon: 'creditcard'
        },
        {
            icon: 'pushpin'
        },
        {
            icon: 'pushpin'
        },
        {
            icon: 'facebook-square'
        },
        {
            icon: 'instagram'
        },
        {
            icon: 'dribbble-square'
        },
    ]

    // Picker
    const [selectedItem, setItem] = useState('');

    const items = [
        { label: "Move-in Inspection", value: "Move-in Inspection" },
        { label: "Move-out Inspection", value: "Move-out Inspection" },
        { label: "Periodic Inspection", value: "Periodic Inspection" },
    ]

    const iconComponent = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={"grey"}
        />
    }

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Banner */}
            <View style={{ width: '90%', height: RFPercentage(6), justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', backgroundColor: Colors.white }} >
                <Image style={{ width: RFPercentage(12.2), height: RFPercentage(4), marginLeft: RFPercentage(2) }} source={require('../../assets/images/logo.png')} />
                <View style={{ position: 'absolute', right: 0, width: RFPercentage(19.5), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                    <TouchableOpacity activeOpacity={0.8} style={{ width: RFPercentage(6), height: RFPercentage(6), borderRadius: RFPercentage(1.2), backgroundColor: '#cfefe0', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2), fontWeight: '500' }} >
                            اردو
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{ width: RFPercentage(6), height: RFPercentage(6), borderRadius: RFPercentage(1.2), backgroundColor: '#cfefe0', justifyContent: 'center', alignItems: 'center' }} >
                        <Ionicons name="notifications-outline" style={{ fontSize: RFPercentage(3.5), fontWeight: 'bold' }} color={Colors.black} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{ width: RFPercentage(6), height: RFPercentage(6), borderRadius: RFPercentage(1.2), backgroundColor: '#cfefe0', justifyContent: 'center', alignItems: 'center' }} >
                        <MaterialIcons name="logout" style={{ fontSize: RFPercentage(3.4), fontWeight: 'bold' }} color={Colors.black} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={{ flex: 1, width: '100%', marginTop: RFPercentage(0.6) }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Detail Cart */}
                    <View style={{ width: '90%', height: RFPercentage(27.5), borderRadius: RFPercentage(2), backgroundColor: '#fdf7df', alignSelf: 'center', marginTop: RFPercentage(3.8) }} >
                        <View style={{ width: '90%', alignSelf: 'center', marginTop: RFPercentage(3), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                            <Text style={{ fontSize: RFPercentage(2.2), color: Colors.black, fontWeight: '600' }} >
                                {`<  1/1  >`}
                            </Text>
                            <View style={{ top: RFPercentage(1), marginLeft: RFPercentage(5), width: '80%', justifyContent: 'center', alignItems: 'flex-start' }} >
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: '700' }} >
                                    Make sure to add your products inclusive of shiping cost
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginTop: RFPercentage(3), alignSelf: 'center', width: '90%', justifyContent: 'center', alignItems: 'flex-start' }} >
                            <Text style={{ lineHeight: RFPercentage(2.7), color: Colors.black, fontSize: RFPercentage(2) }} >
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud nisi ut aliquip ex ea commodo
                                consequat.
                            </Text>
                            <TouchableOpacity activeOpacity={0.8} >
                                <Text style={{ marginTop: RFPercentage(1), color: '#5ab288', fontSize: RFPercentage(1.8), fontWeight: 'bold' }} >
                                    Manage Products
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Heading */}
                    <View style={{ marginTop: RFPercentage(2), width: '90%', justifyContent: 'center', alignItems: 'flex-start' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(3), fontWeight: 'bold' }} >
                            Welcome to Gool Seller portal
                        </Text>
                        <Text style={{ color: '#c9c9c9', fontSize: RFPercentage(1.9), marginTop: RFPercentage(1) }} >
                            Here are some links to get you started
                        </Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(1), width: '90%', justifyContent: 'center', alignItems: 'flex-end', alignSelf: 'center' }} >
                        <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(16), height: RFPercentage(4.2), borderRadius: RFPercentage(0.8), backgroundColor: '#5ab288' }} >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(1.9), fontWeight: '500' }} >
                                Become Pro
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(1.8), marginTop: RFPercentage(0.5), fontWeight: '500' }} >
                            You are using a basic seller account
                        </Text>
                    </View>

                    {/* Boxes */}
                    <Services />

                    {/* Qucik Links */}
                    <View style={{ marginTop: RFPercentage(4.4), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(3), fontWeight: 'bold' }} >
                            Quick Links
                        </Text>
                        <View style={{ position: 'absolute', right: 0 }} >
                            <Switch
                                trackColor={{ false: "#767577", true: "#5ab288" }}
                                thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                                ios_backgroundColor={Colors.grey}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    {/* Picker */}
                    <View style={styles.pickerContainer}>
                        <ReactNativeCrossPicker
                            modalTextStyle={{ color: Colors.black }}
                            mainComponentStyle={styles.mainComponentStyle}
                            modalComponentStyle={styles.modalComponentStyle}
                            iconComponent={iconComponent}
                            placeholderStyle={{ color: "black", fontSize: RFPercentage(1.9) }}
                            textStyle={styles.modalTextStyle}
                            items={items}
                            setItem={setItem} selectedItem={selectedItem}
                            placeholder="Gool construction material(goolconstruction)"
                            modalMarginTop={"75%"}
                        />
                    </View>

                    {/* Options */}
                    {data.map((item, i) => (
                        <View key={i} style={{ marginTop: RFPercentage(4), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                            <TouchableOpacity activeOpacity={0.8} style={{ left: i == 2 ? RFPercentage(1.3) : 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: RFPercentage(20) }} >
                                <AntDesign name={item.icon1} style={{ fontSize: RFPercentage(2) }} color={Colors.darkGrey} />
                                <Text style={{ marginLeft: RFPercentage(1), color: '#5ab288', fontSize: RFPercentage(1.9), fontWeight: 'bold' }} >
                                    {item.title1}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(5), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: RFPercentage(20) }} >
                                <AntDesign name={item.icon2} style={{ fontSize: RFPercentage(2) }} color={Colors.darkGrey} />
                                <Text style={{ marginLeft: RFPercentage(1), color: '#5ab288', fontSize: RFPercentage(1.9), fontWeight: 'bold' }} >
                                    {item.title2}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}

                    {/* Social Links */}
                    <View style={{ marginTop: RFPercentage(7), width: '90%', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                        {socialLinks.map((item, i) => (
                            <TouchableOpacity activeOpacity={0.7} key={i} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(5.6), height: RFPercentage(5.6), borderRadius: RFPercentage(10), backgroundColor: '#f1f1f1' }} >
                                <AntDesign name={item.icon} style={{ fontSize: RFPercentage(2.3) }} color={Colors.black} />
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Bottom Text */}
                    <BottomTabText />

                    <View style={{ marginBottom: RFPercentage(3) }} />
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        marginTop: RFPercentage(1),
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainComponentStyle: {
        width: "100%",
        borderWidth: 0,
        backgroundColor: "#FAFAFA",
        height: RFPercentage(6),
        marginTop: RFPercentage(3),
        borderRadius: RFPercentage(1.8)
    },
    modalComponentStyle: {
        borderRadius: RFPercentage(2.3),
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderWidth: RFPercentage(0.3)
    },
})

export default HomeScreen;