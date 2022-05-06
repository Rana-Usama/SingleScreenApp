import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors';

function Services(props) {

    const itemsData = [
        {
            icon1: require('../../assets/images/stats.png'),
            title1: 'Stats',
            icon2: require('../../assets/images/item.png'),
            title2: 'Items',
            icon3: require('../../assets/images/order.png'),
            title3: 'Order',
            icon4: require('../../assets/images/customer.png'),
            title4: 'Customer',
            icon5: require('../../assets/images/stats.png'),
            title5: 'Invoice',
        },
        {
            icon1: require('../../assets/images/setting.png'),
            title1: 'Settings',
            icon2: require('../../assets/images/customer.png'),
            title2: 'Wallet',
            icon3: require('../../assets/images/chat.png'),
            title3: 'Chat',
            icon4: require('../../assets/images/customer.png'),
            title4: 'Support',
            icon5: require('../../assets/images/training.png'),
            title5: 'Training',
        },
        {
            icon1: require('../../assets/images/shipping.png'),
            title1: 'Shipping',
            icon2: require('../../assets/images/affiliate.png'),
            title2: 'Package',
            icon3: require('../../assets/images/affiliate.png'),
            title3: 'Affiliate',
            icon4: require('../../assets/images/stats.png'),
            title4: 'Contact',
            icon5: require('../../assets/images/customer.png'),
            title5: 'Blog',
        },
    ]
    return (
        <>
            {itemsData.map((item, i) => (

                <View key={i} style={{ marginTop: i == 0 ? RFPercentage(3) : RFPercentage(5), width: '86%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >

                    <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'flex-start', alignItems: 'center' }} >
                        <View style={{ backgroundColor: '#f1f1f1', width: RFPercentage(7.6), height: RFPercentage(8.1), borderRadius: RFPercentage(1.2), justifyContent: 'center', alignItems: 'center' }} >
                            <Image style={{ width: RFPercentage(3.2), height: RFPercentage(3.2) }} source={item.icon1} />
                        </View>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9), fontWeight: '600', marginTop: RFPercentage(0.7) }} >
                            {item.title1}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'flex-start', alignItems: 'center' }} >
                        <View style={{ backgroundColor: '#f1f1f1', width: RFPercentage(7.6), height: RFPercentage(8.1), borderRadius: RFPercentage(1.2), justifyContent: 'center', alignItems: 'center' }} >
                            <Image style={{ width: RFPercentage(3.2), height: RFPercentage(3.2) }} source={item.icon2} />
                        </View>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9), fontWeight: '600', marginTop: RFPercentage(0.7) }} >
                            {item.title2}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'flex-start', alignItems: 'center' }} >
                        <View style={{ backgroundColor: '#f1f1f1', width: RFPercentage(7.6), height: RFPercentage(8.1), borderRadius: RFPercentage(1.2), justifyContent: 'center', alignItems: 'center' }} >
                            <Image style={{ width: RFPercentage(3.2), height: RFPercentage(3.2) }} source={item.icon3} />
                        </View>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9), fontWeight: '600', marginTop: RFPercentage(0.7) }} >
                            {item.title3}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'flex-start', alignItems: 'center' }} >
                        <View style={{ backgroundColor: '#f1f1f1', width: RFPercentage(7.6), height: RFPercentage(8.1), borderRadius: RFPercentage(1.2), justifyContent: 'center', alignItems: 'center' }} >
                            <Image style={{ width: RFPercentage(3.2), height: RFPercentage(3.2) }} source={item.icon4} />
                        </View>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9), fontWeight: '600', marginTop: RFPercentage(0.7) }} >
                            {item.title4}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'flex-start', alignItems: 'center' }} >
                        <View style={{ backgroundColor: '#f1f1f1', width: RFPercentage(7), height: RFPercentage(8), borderRadius: RFPercentage(1.2), justifyContent: 'center', alignItems: 'center' }} >
                            <Image style={{ width: RFPercentage(3.2), height: RFPercentage(3.2) }} source={item.icon5} />
                        </View>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9), fontWeight: '600', marginTop: RFPercentage(0.7) }} >
                            {item.title5}
                        </Text>
                    </TouchableOpacity>

                </View>
            ))}
        </>
    );
}

export default Services;