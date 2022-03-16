// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import Clipboard from '@react-native-community/clipboard';
import React, {useCallback} from 'react';

import {Screens, SnackBar} from '@constants';
import {t} from '@i18n';
import {dismissBottomSheet} from '@screens/navigation';
import {showSnackBar} from '@utils/snack_bar';

import BaseOption from './base_option';

type Props = {
    postMessage: string;
}
const {SNACK_BAR_TYPE} = SnackBar;

const CopyTextOption = ({postMessage}: Props) => {
    const handleCopyText = useCallback(async () => {
        Clipboard.setString(postMessage);
        await dismissBottomSheet(Screens.POST_OPTIONS);
        showSnackBar(SNACK_BAR_TYPE.MESSAGE_COPIED);
    }, [postMessage]);

    return (
        <BaseOption
            i18nId={t('mobile.post_info.copy_text')}
            defaultMessage='Copy Text'
            iconName='content-copy'
            onPress={handleCopyText}
            testID='post.options.copy.text'
        />
    );
};

export default CopyTextOption;
